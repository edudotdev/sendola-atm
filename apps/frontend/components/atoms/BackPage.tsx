import React from 'react'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'

interface Props {
  href: string
}

export const BackPage = ({
  href = '/'
}: Props) => {
  return (
    <Link href={href}>
      <ChevronLeft className='text-slate-700 w-5 h-5 sm:w-8 sm:h-8' />
    </Link>  
  )
}
