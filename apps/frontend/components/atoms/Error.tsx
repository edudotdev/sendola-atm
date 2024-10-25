import React from 'react'
import { CircleAlert } from 'lucide-react'

interface Props {
  error: string | null
  variant?: 'card' | 'text'
}

export const Error = ({
  error, 
  variant = 'card'
}: Props) => {
  return  variant === 'card' ? (
    <div className='flex items-center gap-2 mt-2 bg-red-50 border border-red-200 p-2.5 rounded-lg'>
        <CircleAlert className='text-red-500 w-4 h-4' />
        <p className='text-red-500 text-sm font-semibold'>{error}</p>
      </div>
  ) : <div className='text-sm font-semibold flex items-center gap-2 text-red-500'><CircleAlert className='text-red-500 w-4 h-4' /><p>{error}</p></div>
}
