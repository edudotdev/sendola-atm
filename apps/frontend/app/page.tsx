'use client';
import { useGetUser } from "@/hooks";

export default function Home() {
  const [ user ] = useGetUser()
  console.log(user, 'user')
  return (
    <div>
      {user && <h1>Hello {user.name}</h1>}
    </div>
  );
}
