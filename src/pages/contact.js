import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const Contact = ({ location }) => (
  <Layout location={location}>
    <h1>Contact</h1>
    <ContactForm />
  </Layout>
)

export default Contact
