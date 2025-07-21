import { TransactionFrequency } from "../models/enums";
import { getIntervalsByFrequency } from "../utils/periodsGenerator";
import { Prisma } from "../generated/prisma";
// type BudgetConcept {
//   name            String
//   description     String
//   frequency       TransactionFrequency  @default(MONTHLY)
//   estimatedAmount Float
//   estimatedDate   DateTime
//   operations      BudgetConceptBucket[]
// }

// type BudgetConceptBucket {
//   estimatedAmount Float
//   currentAmount   Float?
//   estimatedDate   DateTime
//   currentDate     DateTime?
//   source          Json
//   destination     Json
// }

export const BudgetConceptBucketGenerator = (
  estimatedAmount: number,
  budgetStartDate: Date,
  budgetEndDate: Date,
  source: Prisma.AccountUpdateInput | Prisma.LegalEntityUpdateInput,
  destination: Prisma.AccountUpdateInput | Prisma.LegalEntityUpdateInput,
  frequency: TransactionFrequency
) => {
  const periods = getIntervalsByFrequency(
    budgetStartDate.toISOString(),
    budgetEndDate.toISOString(),
    frequency
  );
  const buckets = periods.map((period) => ({
    estimatedDate: period,
    currentDate: null,
    estimatedAmount,
    currentAmount: null,
    source,
    destination,
  }));
  return buckets;
};
