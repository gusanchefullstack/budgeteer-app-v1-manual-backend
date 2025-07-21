export enum UserStatus {
  Active = "ACTIVE",
  Inactive = "INACTIVE",
  Deleted = "DELETED",
}

export enum Role {
  User = "USER",
  Admin = "ADMIN",
}

export enum BudgetStatus {
  Active = "ACTIVE",
  Closed = "CLOSED",
  Deleted = "DELETED",
}

export enum TransactionType {
  Income = "INCOME",
  Expense = "EXPENSE",
}

export enum AccountType {
  Savings = "SAVINGS",
  Checkings = "CHECKINGS",
  Stocks = "STOCKS",
  Pension = "PENSION",
  CD = "CDT",
}

export enum TransactionFrequency {
  Daily = "DAILY",
  Weekly = "WEEKLY",
  Monthly = "MONTHLY",
  Quarterly = "QUARTERLY",
  SemiAnnually = "SEMMIANUALLY",
  Annually = "ANNUALY",
  OneTime = "ONETIME",
}
