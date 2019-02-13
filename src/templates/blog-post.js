import React from 'react'
import { Link, graphql } from 'gatsby'
import { path } from 'ramda'

import Layout from '../components/Layout'

const Navigator = ({ nextPost, previousPost }) => {
  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        listStyle: 'none',
        padding: 0,
      }}
    >
      <li>
        {previousPost && (
          <Link to={previousPost.fields.slug} rel="prev">
            ← {previousPost.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {nextPost && (
          <Link to={nextPost.fields.slug} rel="next">
            {nextPost.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  )
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { title, date } = post.frontmatter
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
