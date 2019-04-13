import React from 'react'
import Sidebar from './Sidebar'
import './Layout.styl'

const Layout = ({ children, ignoreNav, resumeLink }) => (
  <div>
    <div className="sidebar">
      <Sidebar ignoreNav={ignoreNav} resumeLink={resumeLink} />
    </div>
    <div className="content">
      {children}
      <div className="bottom-space" />
    </div>
  </div>
)

export default Layout
