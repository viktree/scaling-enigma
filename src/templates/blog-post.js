import React from 'react'
import { Link, graphql } from 'gatsby'
import { path } from 'ramda'

import Layout from '../components/Layout'

const getPostTitle = post => path(['frontmatter', 'title'], post)
const getPostLink = post => path(['fields', 'slug'], post)

const Navigator = ({ nextPost, previousPost }) => (
  <ul style={pageStyle}>
    <li>
      {previousPost && (
        <Link to={getPostLink(previousPost)} rel="prev">
          ← {getPostTitle(previousPost)}
        </Link>
      )}
    </li>
    <li>
      {nextPost && (
        <Link to={getPostLink(nextPost)} rel="next">
          {getPostTitle(nextPost)} →
        </Link>
      )}
    </li>
  </ul>
)

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = path(['markdownRemark', 'frontmatter'], data)
  const title = path(['title'], post)
  const date = path(['date'], post)
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={siteTitle} style={{ height: '100%' }}>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Navigator nextPost={next} previousPost={previous} />
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

const pageStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  listStyle: 'none',
  padding: 0,
}
