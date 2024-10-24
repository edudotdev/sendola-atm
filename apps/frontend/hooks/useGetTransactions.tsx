import React from 'react';
import { useRouter } from 'next/navigation';
import { Transaction } from '@/types'

export function useGetTransactions() {
  const router = useRouter()
  const [transactions, setTransactions] = React.useState<Transaction[]>()
  React.useEffect(() => {
    fetch('http://localhost:3000/api/transactions', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
      .then(res => {
        if (res.status === 401) {
          router.push('/login')
          return
        }
        return res.json()
      }) 
      .then(data => {
        setTransactions(data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return [transactions]
}