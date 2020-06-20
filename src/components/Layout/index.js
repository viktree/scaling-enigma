import './Layout.styl'

import React from 'react'

import Sidebar from '../Sidebar'

const Layout = ({ children, ignoreNav }) => (
	<div className="container">
		<div className="sidebar">
			<Sidebar ignoreNav={ignoreNav} />
		</div>
		<div className="content">{children}</div>
		<div className="bottom-space" />
	</div>
)

export default Layout
