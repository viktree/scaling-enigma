import React from 'react'
import { Link, graphql } from 'gatsby'
import get from 'lodash/get'

import Layout from '../components/Layout'

const ShowPost = ({ node }) => {
  const title = get(node, 'frontmatter.title') || node.fields.slug
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

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <Layout location={this.props.location} title={siteTitle}>
        {posts.map(ShowPost)}
      </Layout>
    )
  }
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
