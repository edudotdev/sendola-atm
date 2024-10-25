'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

type Name = {
  name: string;
}

export function useGetUser() {
  const [user, setUser] = useState<Name>()
  const router = useRouter()

  useEffect(() => {
    const getUser = async () => {
      const response = await fetch(`http://localhost:3000/api/name`, {
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
      setUser(data.data)
    }
    getUser()
  }, [])

  
  return { user }
}

export default useGetUser
