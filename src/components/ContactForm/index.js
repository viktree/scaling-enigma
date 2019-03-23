import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

import './ContactForm.styl'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const Contact = () => {
  const [id, setId] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = async event => {
    try {
      event.preventDefault()
      const form = event.target
      const body = {
        'form-name': form.getAttribute('name'),
        id,
        name,
        email,
        message,
      }
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(body),
      })
      navigate(form.getAttribute('action'))
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div>
      <form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input
              name="bot-field"
              onChange={event => setId(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input
              type="text"
              name="name"
              onChange={event => setName(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input
              type="email"
              name="email"
              onChange={event => setEmail(event.target.value)}
            />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea
              name="message"
              onChange={event => setMessage(event.target.value)}
            />
          </label>
        </p>
        <p>
          <button type="submit">Send</button>
        </p>
      </form>
    </div>
  )
}

export default Contact
