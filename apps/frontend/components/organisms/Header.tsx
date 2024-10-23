import React from 'react'
import { Logo } from '@/components/atoms/'

interface Props {
  card?: string
}

export const Header = ({
  card
}: Props) => {
  return (
    <div className="bg-gradient-to-br from-violet-700 to-indigo-800 w-full max-w-5xl mx-auto p-3 rounded-xl">
      <Logo />
    </div>
  )
}
