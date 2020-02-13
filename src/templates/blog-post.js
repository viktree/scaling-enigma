import React from 'react'
import { graphql } from 'gatsby'
import moment from 'moment'
import { path } from 'ramda'
import { DiscussionEmbed } from 'disqus-react'

import PageContext from '../contexts'
import Layout from '../components/Layout'
import BlogPostNavigator from '../components/BlogPostNavigator'

import './BlogPost.styl'

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const metadata = path(['site', 'siteMetadata'], data)

  const post = path(['markdownRemark'], data)
  const title = path(['frontmatter', 'title'], post)
  const date = path(['frontmatter', 'date'], post)
  const formattedDate = moment(date).format('MMMM D, YYYY')

  const { previous, next } = pageContext

  const siteTitle = path(['title'], metadata)
  const disqusShortname = path(['disqusShortname'], metadata)
  const identifier = path(['id'], post)
  const disqusConfig = { identifier, title }

  return (
    <PageContext.Provider value="dark">
      <Layout location={location} title={siteTitle}>
        <div style={{ paddingLeft: '5%' }}>
          <h1>{title}</h1>
          <p>{formattedDate}</p>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <br />
          <BlogPostNavigator nextPost={next} previousPost={previous} />
          <DiscussionEmbed shortname={disqusShortname} config={disqusConfig} />
        </div>
      </Layout>
    </PageContext.Provider>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        disqusShortname
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
