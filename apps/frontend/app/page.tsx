'use client';
import { useGetUser } from "@/hooks";
import { ATMOptionButton  } from '@/components/molecules'
import { Header } from "@/components/organisms";

export default function Home() {
  const [ user ] = useGetUser()
  console.log(user, 'user')
  return (
    <div className="space-y-8">
      <Header card={'000000000000000000'} />
      {user && 
        <h1 className="font-semibold text-4xl text-slate-800 space-x-2">
          <span>Hello,</span>
          <span className="bg-gradient-to-r from-violet-600 to-violet-800 inline-block text-transparent bg-clip-text">
            {user.name}
          </span>
        </h1>
      }

      <div className="grid grid-cols-2 gap-4 mt-4">
        <ATMOptionButton title="Check Balance" route="/balance" />
        <ATMOptionButton title="Withdraw" route="/withdraw" />
        <ATMOptionButton title="Transactions" route="/transactions" />
      </div>
    </div>
  );
}
