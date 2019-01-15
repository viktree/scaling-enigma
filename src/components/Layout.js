import React from 'react'
import Sidebar from './Sidebar'
import './Layout.styl'

const Layout = ({ children }) => {
  return (
    <div>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">{children}</div>
    </div>
  )
}

export default Layout
