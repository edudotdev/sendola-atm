import { useRouter } from 'next/navigation';

export function useLogout() {
  const router = useRouter()

  const logout = async () => {
    const response = await fetch('http://localhost:3000/api/logout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })

    if (response.status === 200) {
      router.push('/login')
      return
    }
  }

  return { logout }
}
