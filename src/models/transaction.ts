import { TransactionType } from "./enums";

export interface ITransactionCreate {
  description: string;
  transactionType: TransactionType;
  amount: number;
  timestamp: Date;
  legalEntityId: string;
  accountId: string;
}
