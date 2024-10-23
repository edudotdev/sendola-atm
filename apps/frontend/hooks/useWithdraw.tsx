import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

type Withdraw = {
  amount: number
}

export function useWithdraw(amount: number) {
  const router = useRouter();
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const withdrawHandler = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('http://localhost:3000/api/withdraw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({ amount })
      });

      if (response.status === 401) {
        router.push('/login');
        return;
      }

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json();
      console.log(data.data, 'data');
    } catch (err) {
      setError('Something went wrong while processing the withdrawal.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return { withdrawHandler, loading, error };
}