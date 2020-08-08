import React from 'react'
import { Link } from 'gatsby'

const getPostTitle = post => post?.frontmatter?.title
const getPostLink = post => post?.fields?.slug

const BlogPostNavigator = ({ nextPost, previousPost }) => (
	<span>
		<br />
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
		<br />
	</span>
)

export default BlogPostNavigator
