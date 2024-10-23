import React from 'react'
import Link from 'next/link'

interface Props {
  href: string
}

export const BackPage = ({
  href
}: Props) => {
  return (
    <Link href={href}>
      back
    </Link>  
  )
}
