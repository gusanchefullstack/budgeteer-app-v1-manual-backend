export interface IBudgetCreate {
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface IBudgetUpdate {
  name?: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
}
