import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Name = {
  name: string;
}

function useGetUser() {
  const [user, setUser] = React.useState<Name>()
  const router = useRouter()

  useEffect(() => {
    fetch('http://localhost:3000/api/', {
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
        setUser(data.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
  
  return [user]
}

export default useGetUser;