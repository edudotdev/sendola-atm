'use client'
import React from 'react'
import { useLogout } from '@/hooks'
import { LogOut} from 'lucide-react'

export const BtnLogout = () => {
  const { logout } = useLogout()

  return (
    <button 
      onClick={logout} 
      className='flex gap-2 items-center text-base sm:text-lg bg-white text-slate-800 font-semibold py-2 px-4 sm:px-6 rounded-lg'>
        Logout <LogOut className='text-slate-800 w-4 h-4' />
    </button>
  )
}
