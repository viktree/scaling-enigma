import React from 'react'
import { navigate } from 'gatsby-link'

import Toronto from './toronto'
import './Sidebar.styl'

const SidebarLink = ({ id, name, path }) => {
  const handleClick = () => navigate(path)
  return (
    <div key={id} className="sidebar-page-links" onClick={handleClick}>
      {name}
    </div>
  )
}

const ResumeLink = ({ resumeLink }) => (
  <a key="resume" className="sidebar-page-links" href={resumeLink}>
    Resume
  </a>
)

const sidebarItems = [
  {
    id: 'about',
    name: 'About Me',
    path: '/about/',
  },
  {
    id: 'blog',
    name: 'Blog',
    path: '/blog/',
  },
  // {
  //   id: 'projects',
  //   name: 'Projects',
  //   path: '/projects/',
  // },
  {
    id: 'contact',
    name: 'Contact',
    path: '/contact/',
  },
]

const Sidebar = ({ ignoreNav, resumeLink }) => (
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
      {ignoreNav ? '' : <ResumeLink resumeLink={resumeLink} />}
    </div>
  </div>
)

export default Sidebar
