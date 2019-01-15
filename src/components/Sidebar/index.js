import React from 'react'
import Toronto from './toronto'
import Logo from './logo'
import './Sidebar.styl'

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Toronto />
      <div className="sidebar-main">
        <Logo />
        <div className="sidebar-description">
          is the name of Vikram's site. I am a computer science student studying
          at @UofT, who is working as a full-stack developer @ecobee.
        </div>
      </div>
    </div>
  )
}

export default Sidebar
