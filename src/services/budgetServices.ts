import { TransactionFrequency } from "../models/enums";
import { User } from "../models/user";
import { getIntervalsByFrequency } from "../utils/periodsGenerator";
import prisma from "./prismaClient";
import { Prisma } from "../generated/prisma";
import { IBudgetCreate, IBudgetUpdate } from "../models/budget";

const getAllBudgets = async (credentials: User) => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: {
        id: credentials.id,
      },
      include: {
        budgets: true,
      },
    });
    return user.budgets;
  } catch (error) {
    throw error;
  }
};

const getSingleBudget = async (id: string, credentials: User) => {
  try {
    const budget = await prisma.budget.findUnique({
      where: {
        id,
        AND: {
          ownerId: credentials.id,
        },
      },
    });
    return budget;
  } catch (error) {
    throw error;
  }
};

const createBudget = async (budgetData: IBudgetCreate, credentials: User) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: credentials.id,
      },
    });
    if (!user) {
      throw new Error("User not valid for attach Budget");
    }
    const budget = await prisma.budget.create({
      data: {
        ...budgetData,
        ownerId: credentials.id,
        expenses: [],
        incomes: [],
      },
    });
    return budget;
  } catch (error) {
    throw error;
  }
};

const updateBudget = async (
  budgetId: string,
  budgetData: IBudgetUpdate,
  credentials: User
) => {
  try {
    let budget = await prisma.budget.findFirstOrThrow({
      where: {
        id: budgetId,
        AND: { ownerId: credentials.id },
      },
    });
    budget = await prisma.budget.update({
      where: {
        id: budgetId,
      },
      data: {
        ...budgetData,
      },
    });
  } catch (error) {
    throw error;
  }
};

const deleteBudget = async (id: string, credentials: User) => {
  try {
    console.log(credentials)
    console.log(id)
    const budget = await prisma.budget.delete({
      where: {
        id,
        AND: { ownerId: credentials.id },
      },
    });
  } catch (error) {
    throw error;
  }
};

const BudgetConceptBucketGenerator = (
  estimatedAmount: number,
  budgetStartDate: Date,
  budgetEndDate: Date,
  source: Prisma.BudgetUpdateInput | Prisma.LegalEntityUpdateInput,
  destination: Prisma.BudgetUpdateInput | Prisma.LegalEntityUpdateInput,
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

export default {
  BudgetConceptBucketGenerator,
  getAllBudgets,
  getSingleBudget,
  createBudget,
  updateBudget,
  deleteBudget,
};
