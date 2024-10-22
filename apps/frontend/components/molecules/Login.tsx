'use client'
import { useRouter } from 'next/navigation';

import React, { useState } from 'react'

export const Login = () => {
  const router = useRouter()
  const [credentials, setCredentials] = useState({
    cardNumber: '',
    pin: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch('http://localhost:3000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials),
      credentials: 'include'
    })
    .then(res => {
      if (res.status === 200) {
        router.push('/')
        return
      }
       return res.json()
     })
  }

  return (
    <form action="" onSubmit={handleSubmit}>
      <input type="number" name="cardNumber" placeholder="Card Number" onChange={handleChange} />
      <input type="password" name="pin" placeholder="PIN" onChange={handleChange} />
      <button type="submit">Login</button>
    </form>
  )
}
