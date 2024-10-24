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
    fetch('http://localhost:3000/api/balance', {
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
        setCardBalance(data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  
  return { CardBalance }
}