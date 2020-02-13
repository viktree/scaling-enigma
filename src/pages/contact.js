import React from 'react'
import Layout from '../components/Layout'
import ContactForm from '../components/ContactForm'

const Contact = ({ location }) => (
  <Layout location={location}>
    <h1>Contact</h1>
    Please leave a message after the ... you don't even have to wait for the
    tone!
    <ContactForm />
  </Layout>
)

export default Contact
