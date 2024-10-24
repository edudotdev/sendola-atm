import React from 'react'

interface Props {
  variant?: 'light' | 'dark'
  width?: number
}

export const Logo = ({
  variant = 'light',
  width = 150
}: Props) => {
  const src = variant === 'light' ? '/images/logo.png' : '/images/logo2.png'
  
  return (
    <img src={src} alt="sendola logo" width={width} />
  )
}
