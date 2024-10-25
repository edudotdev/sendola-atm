'use client'
import { Username } from '@/components/atoms';
import { ATMOptionButton  } from '@/components/molecules'
import { Header } from "@/components/organisms";
import { useGetUser } from '@/hooks';

const options = [{
  title: 'Check Balance',
  route: '/balance'
}, {
  title: 'Withdraw',
  route: '/withdraw'

}, {
  title: 'Transactions',
  route: '/transactions'
}]

export default function Home() {
  const { user } = useGetUser()

  return (
    <div className="space-y-4 sm:space-y-8 sm:px-3">
      <Header />
      <div className='px-3 sm:px-0 sm:space-y-8'>
        <Username name={user?.name} />
        <div className="flex flex-col gap-4 mt-4">
          {options.map((option, index) => (
            <ATMOptionButton key={index} title={option.title} route={option.route} />
          ))}
        </div>
      </div>
    </div>
  )
}
