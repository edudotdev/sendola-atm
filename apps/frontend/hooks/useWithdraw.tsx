import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface Props {
  amount: number
  setShowModal: (value: boolean) => void
  setNewBalance: (value: number) => void
}

export function useWithdraw({
  amount,  
  setShowModal,
  setNewBalance
}: Props) { 
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const withdrawHandler = async () => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch('http://localhost:3000/api/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ amount })
      });
      
      await new Promise(resolve => setTimeout(resolve, 1000))

      if (response.status === 401) {
        router.push('/login')
        return
      }

      if (response.status === 400) {
        setError('Insufficient balance')
        return
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`)
      }
      
      const data = await response.json()
      setNewBalance(data.data)
      setShowModal(true)
    } catch (err) {
      setError('Something went wrong while processing the withdrawal.')
    } finally {
      setLoading(false)
    }
  }

  return { withdrawHandler, loading, error }
}