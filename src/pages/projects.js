import React from 'react'
import { graphql } from 'gatsby'
import { path } from 'ramda'

import Layout from '../components/Layout'

const BlogIndex = ({ data, location }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)

  return (
    <Layout location={location} title={siteTitle}>
      <h1>Projects Page</h1>
      <br />
      {'This page is under construction.'}
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