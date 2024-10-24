'use client'
import React, { useState } from 'react'
import { PinInput, Error, Spinner } from '@/components/atoms';
import { useLogin } from '@/hooks';

export type Credentials = {
  cardNumber: string
  pin: string
}

export const LoginForm = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    cardNumber: '',
    pin: ''
  })

  const { loginHandler, loading, error  } = useLogin({credentials})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    loginHandler()
  }

  return (
    <form action="" onSubmit={handleSubmit} className='w-full max-w-[320px] mx-auto flex flex-col gap-3'>
      <div className='flex flex-col gap-2'>
        <label className='text-slate-800 font-semibold text-sm'>Card Number</label>
        <input 
          type="number" 
          name="cardNumber" 
          placeholder="Enter your card number"
          // required={true}
          className='border border-slate-200 text-lg w-full rounded-lg py-3 px-5 inputNum'
          onChange={handleChange} 
        />
      </div>
      <PinInput credentials={credentials} setCredentials={setCredentials} />
      {error && <Error error={error} />}
      <button className='mt-4 bg-black hover:bg-black/85 text-white shadow-xl shadow-black/10 flex justify-center font-semibold rounded-lg py-3 w-full' disabled={loading} type="submit">
        {loading ? <Spinner /> : 'Login'}
      </button>
    </form>
  )
}
