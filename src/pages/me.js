import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import Timeline from '../components/Timeline'

const BlogIndex = ({ data, location }) => {
	const siteTitle = data?.site?.siteMetadata?.title

	return (
		<Layout location={location} title={siteTitle}>
			<h1>This is me!</h1>
			Here are a list of places I have worked for or studied at.
			<br />
			<Timeline />
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
