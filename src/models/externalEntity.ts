import { Transaction } from "./transaction";
export interface ExternalEntity {
  id: string;
  name: string;
  description: string;
  legalId: string;
  transactions: Transaction[];
}
