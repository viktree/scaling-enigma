import React from 'react'
import { navigate } from 'gatsby-link'

import './Landing.styl'

const Landing = () => (
  <div className="landing-container">
    <h1 className="landing-name">Vikram Venkataramanan</h1>
    <br />
    <div className="landing-strip">
      <div className="landing-links" onClick={() => navigate('/me')}>
        About
      </div>
      <div className="landing-links" onClick={() => navigate('/blog')}>
        Blog
      </div>
      <div className="landing-links" onClick={() => navigate('/contact')}>
        Contact
      </div>
    </div>
    <br />
  </div>
)

export default Landing
