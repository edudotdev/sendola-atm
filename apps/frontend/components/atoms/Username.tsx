'use client';
import React from 'react'

interface Props {
  name?: string
}

export const Username = ({
  name
}: Props) => {
  
  return (
    <div>
      {name ? 
        <h1 className="font-semibold text-2xl sm:text-4xl text-slate-800 space-x-2">
          <span>Hello,</span>
          <span className="bg-gradient-to-r from-violet-600 to-violet-800 inline-block text-transparent bg-clip-text">
            {name}
          </span>
        </h1>
      : <div className='bg-slate-300/90 animate-pulse rounded-xl w-[280px] h-[40px]'></div>
      }
    </div>
  )
}
