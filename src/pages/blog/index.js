import React from 'react'
import { Link, graphql } from 'gatsby'
import { path } from 'ramda'

import Layout from '../../components/Layout'

const ShowPost = ({ node }) => {
  const title = path(['frontmatter', 'title'], node) || node.fields.slug
  return (
    <div key={node.fields.slug}>
      <h3>
        <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
          {title}
        </Link>
      </h3>
      <small>{node.frontmatter.date}</small>
      <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
    </div>
  )
}

const BlogIndex = ({ data, location }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)
  const posts = path(['allMarkdownRemark', 'edges'], data)

  return (
    <Layout location={location} title={siteTitle}>
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
