import React from 'react'

import { graphql } from 'gatsby'
import { path } from 'ramda'

import Layout from '../components/Layout'

const ThanksPage = ({ data, location }) => {
  const siteTitle = path(['site', 'siteMetadata', 'title'], data)

  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h1>Thank you!</h1>
        <p>This is a custom thank you page for form submissions</p>
        <br />
        {'This page is under construction.'}
      </div>
    </Layout>
  )
}

export default ThanksPage

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
