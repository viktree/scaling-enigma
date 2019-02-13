import React from 'react'
import Toronto from './toronto'
import Logo from './logo'
import './Sidebar.styl'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Toronto />
      <div className="sidebar-main">
        <div className="sidebar-logo-container">
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
        {/* <div>{sidebarItems.map(SidebarLink)}</div> */}
      </div>
    </div>
  )
}

export default Sidebar
