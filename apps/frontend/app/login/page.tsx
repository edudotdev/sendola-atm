import React from 'react'
import { Logo } from '@/components/atoms'
import { LoginForm } from '@/components/molecules'

export default function LoginPage() {
  return (
    <div className='flex flex-col items-center space-y-8 mt-10'>
      <Logo variant='dark' width={240} />
      <LoginForm />
    </div>
  )
}
