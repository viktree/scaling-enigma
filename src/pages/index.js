import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const ShowPost = ({ node }) => {
	const title = node?.frontmatter?.title || node?.fields?.slug
	const date = node?.frontmatter?.date
	const readingTime = node?.fields?.readingTime?.text || node?.fields?.slug

	return (
		<div key={node.fields.slug}>
			<h3>
				<Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
					{title}
				</Link>
			</h3>
			<small style={{ textTransform: 'uppercase' }}>
				{date} | {readingTime}
			</small>
			<p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
			<br />
		</div>
	)
}

const BlogIndex = ({ data, location }) => {
	const siteTitle = data?.site?.siteMetadata?.title
	const posts = data?.allMarkdownRemark?.edges

	return (
		<Layout location={location} title={siteTitle}>
			<h1>Blog Posts</h1>
			<br />
			{posts.map(ShowPost)}
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query {
		allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
			edges {
				node {
					excerpt
					fields {
						slug
						readingTime {
							text
						}
					}
					frontmatter {
						date(formatString: "MMMM DD, YYYY")
						title
					}
				}
			}
		}
	}
`
