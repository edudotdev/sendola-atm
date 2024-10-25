import React from 'react'
import { Logo, BtnLogout } from '@/components/atoms'

export const Header = () => {
  return (
    <div className="flex justify-between bg-gradient-to-br from-black to-indigo-800 w-full max-w-5xl mx-auto p-4 sm:p-5 sm:rounded-xl">
      <Logo variant='light' width={120} />
      <BtnLogout />
    </div>
  )
}
