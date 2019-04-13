import React from 'react'
import { graphql } from 'gatsby'
import { path } from 'ramda'
import Layout from '../components/Layout'
import Landing from '../components/Landing'

const BlogIndex = ({ data, location }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)

  return (
    <Layout location={location} title={siteTitle} ignoreNav={true}>
      <Landing />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        resources {
          resumeLink
        }
      }
    }
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
