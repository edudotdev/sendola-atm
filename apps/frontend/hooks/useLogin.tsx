import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Credentials } from '@/components/molecules';

interface Props {
  credentials: Credentials
}

export function useLogin({credentials}: Props) {
  const router = useRouter()
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  
  const loginHandler = async () => {
    if (!credentials.cardNumber || !credentials.pin || credentials.pin.length !== 4) {
      setError('Please fill in all fields')
      setTimeout(() => {
        setError(null)
      }, 2000)
      return
    }

    setLoading(true)
    setError(null)

    try {  
      const response = await fetch('http://localhost:3000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials),
        credentials: 'include'
      })

      await new Promise(resolve => setTimeout(resolve, 1000));

      if (response.status === 200) {
        router.push('/')
        return
      }

      if(response.status === 401) {
        setError('Invalid card number or pin')
        setTimeout(() => {
          setError(null)
        }, 2000)
        return
      }
    } catch (error) {
      setError('Something went wrong while loging in')
      setTimeout(() => {
        setError(null)
      }, 2000)
      return
    } finally {
      setLoading(false)
    }
  }

  return { loginHandler, loading, error }
}