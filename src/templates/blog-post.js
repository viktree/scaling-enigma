import React from 'react'
import { Link, graphql } from 'gatsby'
import moment from 'moment'
import { path } from 'ramda'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/Layout'

import './BlogPost.styl'

// eslint-disable-next-line no-undef
const { DISQUS_SHORT_NAME } = process.env

const getPostTitle = post => path(['frontmatter', 'title'], post)
const getPostLink = post => path(['fields', 'slug'], post)

const Navigator = ({ nextPost, previousPost }) => (
  <ul className="post-navigator">
    <li>
      {previousPost && (
        <Link to={getPostLink(previousPost)} rel="prev" className="post-nav">
          ← {getPostTitle(previousPost)}
        </Link>
      )}
    </li>
    <li>
      {nextPost && (
        <Link to={getPostLink(nextPost)} rel="next" className="post-nav">
          {getPostTitle(nextPost)} →
        </Link>
      )}
    </li>
  </ul>
)

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = path(['markdownRemark'], data)
  const title = path(['frontmatter', 'title'], post)
  const date = path(['frontmatter', 'date'], post)
  const formattedDate = moment(date).format('MMMM D, YYYY')
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)
  const { previous, next } = pageContext
  const disqusConfig = {
    identifier: post.id,
    title,
  }

  return (
    <Layout location={location} title={siteTitle}>
      <div style={{ paddingLeft: '12%' }}>
        <h1>{title}</h1>
        <p>{formattedDate}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <br />
        <Navigator nextPost={next} previousPost={previous} />
        <DiscussionEmbed shortname={DISQUS_SHORT_NAME} config={disqusConfig} />
      </div>
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
