'use client'
import React, { useState } from 'react'
import { BackPage } from '@/components/atoms'
import { Withdraw } from '@/components/organisms'
import { ModalWithdraw } from '@/components/molecules'

export default function WithdrawPage() {
  const [showModal, setShowModal] = useState(false)
  const [newBalance, setNewBalance] = useState(0)

  return (
    <>
    <div className='px-3 py-6 space-y-8'>
      <header className='flex justify-between items-center'>
        <BackPage href='/' />
        <h1 className='text-lg sm:text-2xl font-semibold'>Withdraw</h1>
        <span className='w-[32px]'></span>
      </header>
      <Withdraw setShowModal={setShowModal} setNewBalance={setNewBalance} />

    </div>
      {showModal && <ModalWithdraw newBalance={newBalance} />}
    </>
  )
}
