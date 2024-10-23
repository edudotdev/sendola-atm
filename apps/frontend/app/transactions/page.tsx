'use client'
import React from 'react';
import { BackPage } from '@/components/atoms'
import { useGetTransactions } from '@/hooks'

export default function TransactionPage() {
  const [transactions] = useGetTransactions()
  console.log(transactions)
  return (
    <div>
      <BackPage href='/' />
      {transactions?.map(transactions => (
        <div key={transactions.id}>
          <h1 className="text-2xl font-semibold">{transactions.trasactionType}</h1>
          <p className="text-xl">{transactions.amount}</p>
          <p className="text-sm">{transactions.date}</p>
        </div>
      ))}
    </div>
  );
}