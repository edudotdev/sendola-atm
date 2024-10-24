import React from 'react'
import { DateFormat } from '@/components/atoms'
import { Transaction } from '@/types/index'
import { CircleDollarSign, MoveDownLeft } from 'lucide-react'

interface Props {
  transaction: Transaction
}

export const TransactionCard = ({
  transaction
}: Props) => {

  console.log(transaction)
  return (
    <div className='flex justify-between bg-white border border-slate-200 p-3 rounded-xl shadow-sm'>
      <div className='flex items-center gap-3'>
        <div className='p-2.5 bg-violet-100 rounded-full'>
          {transaction.transaction_type === 'withdraw' ? 
            <MoveDownLeft className='text-violet-700 w-7 h-7' /> : 
            <CircleDollarSign className='text-violet-700 w-7 h-7' /> 
          }
        </div>
        <div className='space-y-1'>
          <p className='font-semibold text-slate-700'>ATM</p>
          <p className="text-sm text-slate-500 font-semibold">
            <DateFormat date={transaction.date} />
          </p>
        </div>
      </div>
      <div className='flex flex-col gap-1 items-end'>
        <p className="font-semibold text-slate-700">{`${transaction.transaction_type === 'withdraw' ? '-' : '+'} $${transaction.amount}`}</p>
        <p className="text-sm text-slate-500 font-semibold">{transaction.transaction_type === 'checkBalance' ? 'Check Balance' : 'Withdraw'}</p>
      </div>
    </div>
  )
}
