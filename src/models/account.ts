export interface IAccountCreate {
  name: string;
  description: string;
  institution: string;
  legalId: string;
  balance: number;
  ownerId: string;
}
export interface IAccountUpdate {
  name?: string;
  description?: string;
  institution?: string;
  legalId?: string;
  balance?: number;
  ownerId?: string;
}

