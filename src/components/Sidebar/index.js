import React from 'react'
import { navigate } from 'gatsby-link'
import { path } from 'ramda'
import { StaticQuery, graphql } from 'gatsby'

import Toronto from './toronto'
import sidebarItems from './pageLinks'
import './Sidebar.styl'

const SidebarLink = ({ id, name, path }) => (
  <div key={id} className="sidebar-page-links" onClick={() => navigate(path)}>
    {name}
  </div>
)

const ResumeLink = () => (
  <StaticQuery
    query={graphql`
      query SidebarQuery {
        site {
          siteMetadata {
            resources {
              resumeLink
            }
          }
        }
      }
    `}
    render={data => {
      const metadata = path(['site', 'siteMetadata'], data)
      const resumeLink = path(['resources', 'resumeLink'], metadata)
      return (
        <a key="resume" className="sidebar-page-links" href={resumeLink}>
          Resume
        </a>
      )
    }}
  />
)

const Sidebar = ({ ignoreNav }) => (
  <div className="sidebar-container">
    <Toronto />
    <div className="sidebar-main">
      <div className="sidebar-description">
        Welcome to this little portion of the internet that I am carving out for
        myself!
        <br />
        <br />
        My name is Vikram. I&#39;m computer science student{' '}
        <a href="https://www.utoronto.ca/" className="sidebar-uoft-link">
          @UofT
        </a>{' '}
        and an API developer{' '}
        <a href="https://ecobee.com" className="sidebar-ecobee-link">
          @ecobee
        </a>
        .
      </div>
      <br />
      <br />
      {ignoreNav ? '' : sidebarItems.map(SidebarLink)}
      {ignoreNav ? '' : <ResumeLink />}
    </div>
  </div>
)

export default Sidebar
