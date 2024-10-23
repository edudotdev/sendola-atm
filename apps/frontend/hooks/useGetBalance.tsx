import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Balance = {
  balance: number;
}

export function useGetBalance() {
  const [balance, setBalance] = React.useState<Balance>()
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
        setBalance(data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  
  return [balance]
}