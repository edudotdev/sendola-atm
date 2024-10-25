import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Transaction } from '@/types'

export function useGetTransactions() {
  const router = useRouter()
  const [transactions, setTransactions] = React.useState<Transaction[]>()

  useEffect(() => {
    const getTransactions = async () => {
      const transactions = await fetch('http://localhost:3000/api/transactions', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      if (transactions.status === 401) {
        router.push('/login')
        return
      }

      const data = await transactions.json()
      setTransactions(data.data)
    }
    getTransactions()
  }, [])

  return [transactions]
}
