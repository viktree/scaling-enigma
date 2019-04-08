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
  // {
  //   id: 'resume',
  //   name: 'Resume',
  //   path: '/resume/',
  // },
  {
    id: 'contact',
    name: 'Contact',
    path: '/contact/',
  },
]

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
      <a
        key="resume"
        className="sidebar-page-links"
        href="https://ucc43dc4127b02bbaec05e087ecb.dl.dropboxusercontent.com/cd/0/get/Aekr8aIe-4mRVUF-28le-bAdZZm-FuJKZHBx0NZQI89oI8QzqlQMboRdD-jwTCed-ailKQn712ekZDvwW1f647bUpuRdAdwFKWXRJtCd-lvgPEHgGod8pmDP8nPMe5eEqks/file?dl=1#"
      >
        Resume
      </a>
    </div>
  </div>
)

export default Sidebar
