import React from 'react'
import { navigate } from 'gatsby-link'

import Toronto from './toronto'
import Logo from './logo'
import './Sidebar.styl'
import { isAbsolute } from 'path'

const SidebarLink = ({ id, name, path }) => {
  const handleClick = () => navigate(path)
  return (
    <div key={id} className="sidebar-page-links" onClick={handleClick}>
      {name}
    </div>
  )
}

const Sidebar = () => {
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
    {
      id: 'projects',
      name: 'Projects',
      path: '/projects/',
    },
    {
      id: 'contact',
      name: 'Get In Touch!',
      path: '/contact/',
    },
  ]
  return (
    <div className="sidebar-container">
      <Toronto />
      <div className="sidebar-main">
        <div className="sidebar-logo-container" onClick={() => navigate('/')}>
          <Logo />
          .netlify.com
        </div>
        <br />
        <div className="sidebar-description">
          Welcome to this little portion of the internet that I am carving out
          for myself!
          <br />
          <br />
          My name is Vikram. I&#39;m computer science student{' '}
          <a href="https://www.utoronto.ca/" className="sidebar-uoft-link">
            @UofT
          </a>{' '}
          and an API developer{' '}
          <a href="https://ecobee.com" className="sidebar-ecobee">
            @ecobee
          </a>
          .
        </div>
        <br />
        {sidebarItems.map(SidebarLink)}
      </div>
    </div>
  )
}

export default Sidebar
