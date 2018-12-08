import React from 'react'
import Toronto from './toronto'
import Logo from './logo'
import './Sidebar.styl'

const Sidebar = props => {
  return (
    <div className="sidebar">
      <Toronto />
      <div className="sidebar-container">
        <Logo />
        <div className="sidebar-description">
          This is Vikram's personal blog. He is a computer science student @UofT
          who is currently working as a full-stack developer @ecobee.
        </div>
      </div>
    </div>
  )
}

export default Sidebar
