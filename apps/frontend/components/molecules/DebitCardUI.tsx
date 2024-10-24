import React from 'react'
import { Logo } from '@/components/atoms'

interface Props {
  name: string | undefined
}

export const DebitCardUI = ({
  name = ''
}: Props) => {
  return (
    <div className='flex flex-col justify-between h-52 w-full max-w-96 rounded-xl p-4 shadow-lg bg-gradient-to-tr from-violet-600 via-violet-700 to-violet-900 border-2 border-white/30'>
      <Logo width={100} />
      <div className='flex items-center justify-between'>
        <p className='text-white text-lg font-semibold'>{name}</p>
        <p className='text-white text-lg font-semibold'>Debit Card</p>
      </div>
    </div>
  )
}
