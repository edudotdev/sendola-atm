'use client'
import React, { useState } from 'react';
import { BackPage } from '@/components/atoms'
import { useWithdraw } from '@/hooks';

export default function WithdrawPage() {
  const [amount, setAmount] = useState<number>(0)
  const { withdrawHandler, loading, error } = useWithdraw(amount)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(parseFloat(e.target.value))
    if(e.target.value === '') return
  }

  return (
    <div>
      <BackPage href='/' />

      <h1 className='mb-10'>Withdraw</h1>
      <input type="number" onChange={handleChange} value={amount} />
      <button onClick={withdrawHandler} disabled={amount === 0}>
        {loading ? 'Processing...' : 'Button Withdraw'}
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}