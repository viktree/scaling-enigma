/* eslint-disable */
const _ = require('lodash')
// const { forEach } = require('ramda')
const Promise = require('bluebird')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

const createPages = ({ graphql, actions }) => {
	const { createPage } = actions

	const query = `
		{
			allMarkdownRemark(
				sort: { fields: [frontmatter___date], order: DESC }
				limit: 1000
			) {
				edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
						}
					}
				}
			}
		}

	`
	const component = path.resolve('./src/templates/blog-post.js')

	return new Promise((resolve, reject) => {
		resolve(
			graphql(query).then(result => {
				if (result.errors) {
					reject(result.errors)
				}

				// Create blog posts pages.
				const posts = result.data.allMarkdownRemark.edges

				const getPreviousPost = (posts, i) =>
					i === posts.length - 1 ? null : posts[i + 1].node
				const getNextPost = (posts, i) => (i === 0 ? null : posts[i - 1].node)

				const createPost = (post, i) => {
					const previous = getPreviousPost(i)
					const next = getNextPost(i)
					const { slug } = post.node.fields
					const context = {
						slug,
						previous,
						next,
					}
					const pageData = { path: slug, component, context }

					createPage(pageData)
				}

				_.each(posts, createPost)
			})
		)
	})
}

exports.onCreateNode = ({ node, actions, getNode }) => {
	const { createNodeField } = actions

	if (node.internal.type === `MarkdownRemark`) {
		const value = createFilePath({ node, getNode })
		createNodeField({
			name: `slug`,
			node,
			value,
		})
	}
}

exports.createPages = createPages
