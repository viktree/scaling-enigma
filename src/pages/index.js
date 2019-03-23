import React from 'react'
import { graphql } from 'gatsby'
import { path } from 'ramda'
import Layout from '../components/Layout'

const Landing = () => (
  <div className="landing-container">
    Welcome to my site!
    <br />
    {'This page is under construction.'}
  </div>
)

const BlogIndex = ({ data, location }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)

  return (
    <Layout location={location} title={siteTitle}>
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
