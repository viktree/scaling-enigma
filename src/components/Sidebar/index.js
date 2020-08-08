import React from 'react'
import { navigate } from 'gatsby-link'
import { StaticQuery, graphql } from 'gatsby'

import Toronto from './toronto'
import sidebarItems from './pageLinks'
import './Sidebar.styl'

const SidebarLink = ({ id, name, path }) => (
	<div key={id} className="sidebar-page-links" onClick={() => navigate(path)}>
		{name}
	</div>
)

const ResumeLink = () => {
	const resumeQuery = graphql`
		query SidebarQuery {
			site {
				siteMetadata {
					resources {
						resumeLink
					}
				}
			}
		}
	`
	return (
		<StaticQuery
			query={resumeQuery}
			render={data => {
				const resumeLink = data?.site?.siteMetadata?.resources?.resumeLink
				return (
					<div key="resume" className="sidebar-page-links">
						<a className="sidebar-resume-link" href={resumeLink}>
							Resume
						</a>
					</div>
				)
			}}
		/>
	)
}

const Sidebar = () => (
	<div className="sidebar-container">
		<Toronto />
		<img
			className="sidebar-avatar"
			src="https://github.com/viktree/scaling-enigma/raw/master/src/assets/avatar.png"
			onMouseEnter={e =>
				(e.currentTarget.src =
					'https://github.com/viktree/scaling-enigma/raw/master/src/assets/avatar-hover.jpg')
			}
			onMouseOut={e =>
				(e.currentTarget.src =
					'https://github.com/viktree/scaling-enigma/raw/master/src/assets/avatar.png')
			}
		/>
		<div className="sidebar-main">
			<div className="sidebar-description">
				You have stumbled upon a little portion of the internet that I am
				carving out for myself! I{"'"}m Vikram, a Software Engineer{' '}
				<a href="https://www.pervices.com/" className="sidebar-pv-link">
					@PerVices.
				</a>{' '}
			</div>
			<div className="sidebar-links">
				<ResumeLink />
				{sidebarItems.map(SidebarLink)}
			</div>
		</div>
	</div>
)

export default Sidebar
