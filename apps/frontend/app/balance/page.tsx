'use client'
import React from 'react'
import { BackPage } from '@/components/atoms'
import { DebitCardUI } from '@/components/molecules'
import { useGetBalance } from '@/hooks'
import { formatMoney } from '@/utils/utils'

export default function BalancePage() {
  const { CardBalance } = useGetBalance()

  return (
    <div className='px-3 py-6 space-y-10'>
      <header className='flex justify-between items-center'>
        <BackPage href='/' />
        <h1 className='text-lg sm:text-2xl font-semibold'>Balance</h1>
        <span className='w-[32px]'></span>
      </header>

      <div className='space-y-8 mx-auto flex flex-col items-center justify-center'>
        <div className='text-center space-y-3'>
          <h2 className='text-slate-600'>Your balance</h2>
          {CardBalance?.balance ? 
            <p className='text-5xl font-semibold'>
              ${formatMoney(CardBalance.balance+'')}
            </p> : <div className='h-[48px]'></div>
          }
        </div>
        <DebitCardUI name={CardBalance?.name} />
        <p className='text-slate-700 flex gap-2 text-2xl font-semibold'>
          <p className='translate-y-1.5'>****  ****  ****</p>
         {CardBalance?.card_number.slice(-4)}
        </p>
      </div>
    </div>
  );
}
