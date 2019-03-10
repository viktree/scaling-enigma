import React from 'react'
import Sidebar from './Sidebar'
import './Layout.styl'

const Layout = ({ children }) => (
  <div>
    <div className="sidebar">
      <Sidebar />
    </div>
    <div className="content">
      {children}
      <div className="bottom-space" />
    </div>
  </div>
)

export default Layout
