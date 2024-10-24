import React from 'react'
import { CircleAlert } from 'lucide-react'

interface Props {
  error: string | null
}

export const Error = ({
  error
}: Props) => {
  return (
    <div className='flex items-center gap-2 mt-2 bg-red-50 border border-red-200 p-2.5 rounded-lg'>
        <CircleAlert className='text-red-500 w-4 h-4' />
      <p className='text-red-500 text-sm font-semibold'>{error}</p>
    </div>
  )
}
