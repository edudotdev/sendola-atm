'use client'
import React from 'react';
import { BackPage } from '@/components/atoms'
import { TransactionCard } from '@/components/molecules'
import { useGetTransactions } from '@/hooks'

export default function TransactionPage() {
  const [transactions] = useGetTransactions()

  return (
    <div className='px-3 py-6 space-y-10'>
      <header className='flex justify-between items-center'>
        <BackPage href='/' />
        <h1 className='text-lg sm:text-2xl font-semibold'>Transactions</h1>
        <span className='w-[32px]'></span>
      </header>
      <div className='space-y-3'>
        {transactions?.map(transactions => (
          <TransactionCard key={transactions.id} transaction={transactions} />
        ))}
      </div>
    </div>
  )
}