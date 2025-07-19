export interface ILegalEntityCreate {
  name: string;
  description: string;
  legalId: string;
  ownerId: string;
}
export interface ILegalEntityUpdate {
  name?: string;
  description?: string;
  legalId?: string;
  ownerId?: string;
}

