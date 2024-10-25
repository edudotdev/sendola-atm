'use client'
import React, { useState } from 'react'
import { formatMoney } from '@/utils/utils'

interface Props {
  balance?: number
  setRealAmount: (value: number) => void
}

export const Amount = ({
  balance,
  setRealAmount
}: Props) => {
  const [amount, setAmount] = useState('$0.00')
  const [exceededAmount, setExceededAmount] = useState(false)

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    if (value === '') return

    const rawValue = value.replace(/[^\d]/g, '')
    const realValue = parseFloat(rawValue || '0') / 100

    setRealAmount(realValue)

    const formattedValue = rawValue.length > 0
      ? `$${formatMoney(`${rawValue.slice(0, -2)}.${rawValue.slice(-2)}`)}`
      : '$0.00'

    setAmount(formattedValue)
    if (!balance) return
    setExceededAmount(realValue > balance)
  }

  return (
    <div className='flex flex-col gap-2 py-8 text-slate-700'>
      <h2 className='text-center text-sm font-medium '>Type an amount</h2>
      <input
        type='tel'
        value={amount}
        onChange={handleChange}
        maxLength={10}
        placeholder='$0.00'
        className={`text-5xl font-semibold text-center outline-none w-full bg-transparent ${exceededAmount ? 'text-red-500' : 'text-slate-700'} inputNum`}
      />
    </div>
  )
}
