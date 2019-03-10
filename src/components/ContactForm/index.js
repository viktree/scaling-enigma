import React, { useState } from 'react'
import { navigate } from 'gatsby-link'

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const Contact = () => {
  const initialFormState = { id: null, name: '', email: '', message: '' }
  const [user, setUser] = useState(initialFormState)

  const handleFormInput = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  const handleSubmit = async event => {
    try {
      event.preventDefault()
      const form = event.target
      const body = {
        'form-name': form.getAttribute('name'),
        ...user,
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
            <input name="bot-field" onChange={handleFormInput} />
          </label>
        </p>
        <p>
          <label>
            Your name:
            <br />
            <input type="text" name="name" onChange={handleFormInput} />
          </label>
        </p>
        <p>
          <label>
            Your email:
            <br />
            <input type="email" name="email" onChange={handleFormInput} />
          </label>
        </p>
        <p>
          <label>
            Message:
            <br />
            <textarea name="message" onChange={handleFormInput} />
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
