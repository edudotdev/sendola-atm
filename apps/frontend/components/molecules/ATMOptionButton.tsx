import React from 'react'
import Link from 'next/link'

interface Props {
  title: string
  route: string
}

export const ATMOptionButton = ({
  title,
  route
}: Props) => {
  return (
    <Link href={route} className='bg-white p-4 rounded-lg border border-slate-200 shadow-sm hover:shadow transition-shadow'>
      <article>
        <h2 className='text-xl font-semibold text-slate-700'>{title}</h2>
      </article>
    </Link>
  )
}
