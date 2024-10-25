'use client'
import React from 'react'
import Link from 'next/link'
import { formatMoney } from '@/utils/utils'

interface Props {
  newBalance: number
}

export const ModalWithdraw = ({
  newBalance
}: Props) => {

  return (
    <div className='fixed top-0 left-0 right-0 bottom-0 px-4 bg-black/60 backdrop-blur-sm flex items-center justify-center'>
      <div className='flex flex-col justify-between bg-white rounded-2xl p-6 w-[400px] h-[350px]'>
        <div className='space-y-4'>
          <h2 className='text-center text-3xl font-semibold'>Withdraw Successful!</h2>
          <p className='text-center text-slate-700 mt-4'>Your balance has been updated</p>
          <p className='text-slate-700 font-semibold text-4xl text-center'>${formatMoney(newBalance+'')}</p>
        </div>
        <div className='space-y-6'>
          <hr />
          <Link href='/' className='block text-center bg-violet-700 hover:bg-violet-800 text-white w-full rounded-xl px-4 py-5 font-semibold'> 
            Accept
          </Link>
        </div>
      </div>
    </div>
  )
}
