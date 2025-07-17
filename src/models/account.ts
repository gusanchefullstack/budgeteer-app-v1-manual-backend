import { AccountType } from "./enums";
import { Transaction } from "./transaction";
export interface Account {
  id: string;
  name: string;
  institution: string;
  type: AccountType;
  balance: number;
  transactions: Transaction[];
}
