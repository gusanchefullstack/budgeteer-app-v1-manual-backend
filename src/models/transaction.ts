import { TransactionType } from "./enums"
export interface Transaction {
    id: string
    amount: number
    date: Date
    userId: string
    type: TransactionType
}