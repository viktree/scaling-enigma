import React from 'react'
import { graphql } from 'gatsby'
import { DiscussionEmbed } from 'disqus-react'

import PageContext from '../contexts'
import Layout from '../components/Layout'
import BlogPostNavigator from '../components/BlogPostNavigator'

import 'katex/dist/katex.min.css'
import './BlogPost.styl'

const BlogPostTemplate = ({ data, pageContext, location }) => {
	const metadata = data?.site?.siteMetadata

	const post = data?.markdownRemark
	const title = post?.frontmatter?.title
	const date = post?.frontmatter?.date
	const readingTime = post?.fields?.readingTime?.text

	const { previous, next } = pageContext

	const siteTitle = metadata?.title
	const disqusShortname = metadata?.disqusShortname
	const identifier = post?.id
	const disqusConfig = { identifier, title }

	return (
		<PageContext.Provider value="dark">
			<Layout location={location} title={siteTitle}>
				<div className="blog-post-content">
					<h1>{title}</h1>
					<p className="blog-post-date">{date + ' | ' + readingTime}</p>
					<div dangerouslySetInnerHTML={{ __html: post.html }} />
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
			fields {
				readingTime {
					text
				}
			}
		}
	}
`
