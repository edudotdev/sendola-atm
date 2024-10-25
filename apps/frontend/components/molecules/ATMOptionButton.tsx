import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  route: string
}

export const ATMOptionButton = ({
  title,
  route,
}: Props) => {
  return (
    <Link href={route} className='relative grid bg-black place-content-center group rounded-2xl shadow hover:shadow transition-shadow h-48 overflow-hidden'> 
      <div className="absolute bottom-0 left-[50%] -translate-x-1/2 top-[-50%] h-[500px] w-[600px] sm:w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.3),rgba(255,255,255,0))] sm:bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.35),rgba(255,255,255,0))]"><div className="absolute bottom-0 left-[50%] -translate-x-1/2 top-[-10%] h-[500px] w-[800px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(139,92,246,.15),rgba(255,255,255,0))]"></div></div>
      <h2 className='text-3xl sm:text-4xl font-bold z-10 bg-zinc-800 dark:bg-gradient-to-b from-zinc-50 to-zinc-300 group-hover:to-zinc-50 bg-clip-text text-transparent drop-shadow-sm'>{title}</h2>
    </Link>
  )
}
