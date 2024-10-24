export type Transaction = {
  id: number
  transaction_type: 'withdraw' | 'checkBalance'
  amount: number
  date: string
}