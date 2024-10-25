'use client'
import React, { useEffect, useState } from 'react'
import { Amount } from '@/components/molecules'
import { Error, Spinner } from '@/components/atoms'
import { useGetBalance, useWithdraw } from '@/hooks'
import { formatMoney } from '@/utils/utils'

interface Props {
  setShowModal: (value: boolean) => void
  setNewBalance: (value: number) => void
}

export const Withdraw = ({
  setShowModal,
  setNewBalance
}: Props) => {
  const [exceededAmount, setExceededAmount] = useState(false)
  const [amount, setAmount] = useState(0)
  const { CardBalance } = useGetBalance()
  const { withdrawHandler, loading, error } = useWithdraw({amount, setShowModal, setNewBalance})

  useEffect(() => {
    setExceededAmount(Boolean(CardBalance?.balance && amount > CardBalance?.balance))
  }, [CardBalance?.balance, amount])

  return (
    <>
      <p className='text-center font-semibold text-slate-600'>
        Your current balance: 
        {CardBalance?.balance && 
          <span className='text-violet-700'>
          {` $ ${formatMoney(CardBalance?.balance+'')}`}
        </span>
        }
      </p>
      
      <Amount balance={CardBalance?.balance} setRealAmount={setAmount} />
      
      <div className='flex flex-col justify-center items-center space-y-4'>
        {exceededAmount && <Error error='Insufficient balance' variant='text' />}
        {error && <Error error={error} variant='text' />}

        <button onClick={withdrawHandler} 
          className={`grid place-items-center bg-violet-700 text-white mx-auto w-52 p-4 rounded-xl font-semibold transition-colors ${amount === 0 || exceededAmount || loading ? 'cursor-not-allowed !bg-slate-700' : ''}`} 
          disabled={amount === 0 || exceededAmount || loading}
        >
          {loading ? <Spinner /> : 'Withdraw'}
        </button> 
      </div>
    </>
  )
}
