'use client'
import React from 'react';
import { BackPage } from '@/components/atoms';
import { useGetBalance } from '@/hooks';

export default function BalancePage() {
  const [ balance ] = useGetBalance()
  console.log(balance, 'balance')
  return (
    <div>
      <BackPage href="/" />
      {balance && <h1>{balance+''}</h1>}
    </div>
  );
}
