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
        const resumeLink = path(
          ['site', 'siteMetadata', 'resources', 'resumeLink'],
          data
        )
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
    {/* <img */}
    {/*   className="sidebar-avatar" */}
    {/*   src="https://github.com/viktree/scaling-enigma/raw/master/src/assets/avatar.png" */}
    {/*   onMouseEnter={e => */}
    {/*     (e.currentTarget.src = */}
    {/*       'https://github.com/viktree/scaling-enigma/raw/master/src/assets/avatar-hover.jpg') */}
    {/*   } */}
    {/*   onMouseOut={e => */}
    {/*     (e.currentTarget.src = */}
    {/*       'https://github.com/viktree/scaling-enigma/raw/master/src/assets/avatar.png') */}
    {/*   } */}
    {/* /> */}
    <div className="sidebar-main">
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
      <div className="sidebar-description">
        You have stumbled upon a little portion of the internet that I am
        carving out for myself!
        <br />
        <br />
        My name is Vikram. Currently, I am finishing up my computer science
        degree{' '}
        <a href="https://www.utoronto.ca/" className="sidebar-uoft-link">
          @UofT
        </a>{' '}
        after spending a year as an API developer{' '}
        <a href="https://ecobee.com" className="sidebar-ecobee-link">
          @ecobee
        </a>
        .
      </div>
      <div className="sidebar-links">
        <ResumeLink />
        {sidebarItems.map(SidebarLink)}
      </div>
    </div>
  </div>
)

export default Sidebar
