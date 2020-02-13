import './Layout.styl'

import React from 'react'

import Sidebar from '../Sidebar'

const Layout = ({ children, ignoreNav }) => (
  <div className="container">
    <div className="sidebar">
      <Sidebar ignoreNav={ignoreNav} />
    </div>
    <div className="content">
      {children}
      <div className="bottom-space" />
    </div>
  </div>
)

export default Layout
