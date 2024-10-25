import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type CardBalance = {
  balance: number
  card_number: string
  name: string
}

export function useGetBalance() {
  const [CardBalance, setCardBalance] = React.useState<CardBalance>()
  const router = useRouter()

  useEffect(() => {
    const getBalance = async () => {
      const response = await fetch('http://localhost:3000/api/balance', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include'
      })

      if (response.status === 401) {
        router.push('/login')
        return
      }

      const data = await response.json()
      setCardBalance(data.data)
    }
    getBalance()
  }, [])
  
  return { CardBalance }
}