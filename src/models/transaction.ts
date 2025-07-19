import { TransactionType } from "./enums";

export interface ITransactionCreate {
  description: string;
  transactionType: TransactionType;
  ownerId: string;
  amount: number;
  timestamp: Date;
  legalEntityId: string;
  accountId: string;
}
