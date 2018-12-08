import React from 'react'
import Sidebar from './Sidebar'
import './Layout.styl'

const Layout = ({ children }) => {
  return (
    <div className="grid">
      <Sidebar />
      <div className="main">{children}</div>
    </div>
  )
}

export default Layout
