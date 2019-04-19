import React from 'react'
import { Link } from 'gatsby'
import { path } from 'ramda'

const getPostTitle = post => path(['frontmatter', 'title'], post)
const getPostLink = post => path(['fields', 'slug'], post)

const BlogPostNavigator = ({ nextPost, previousPost }) => (
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

export default BlogPostNavigator
