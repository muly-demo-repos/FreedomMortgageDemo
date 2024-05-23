/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Borrower as PrismaBorrower,
  CreditScore as PrismaCreditScore,
  FinancialRecord as PrismaFinancialRecord,
  ScoreReport as PrismaScoreReport,
} from "@prisma/client";

export class BorrowerServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BorrowerCountArgs, "select">): Promise<number> {
    return this.prisma.borrower.count(args);
  }

  async borrowers<T extends Prisma.BorrowerFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerFindManyArgs>
  ): Promise<PrismaBorrower[]> {
    return this.prisma.borrower.findMany<Prisma.BorrowerFindManyArgs>(args);
  }
  async borrower<T extends Prisma.BorrowerFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerFindUniqueArgs>
  ): Promise<PrismaBorrower | null> {
    return this.prisma.borrower.findUnique(args);
  }
  async createBorrower<T extends Prisma.BorrowerCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerCreateArgs>
  ): Promise<PrismaBorrower> {
    return this.prisma.borrower.create<T>(args);
  }
  async updateBorrower<T extends Prisma.BorrowerUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerUpdateArgs>
  ): Promise<PrismaBorrower> {
    return this.prisma.borrower.update<T>(args);
  }
  async deleteBorrower<T extends Prisma.BorrowerDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.BorrowerDeleteArgs>
  ): Promise<PrismaBorrower> {
    return this.prisma.borrower.delete(args);
  }

  async findCreditScores(
    parentId: string,
    args: Prisma.CreditScoreFindManyArgs
  ): Promise<PrismaCreditScore[]> {
    return this.prisma.borrower
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .creditScores(args);
  }

  async findFinancialRecords(
    parentId: string,
    args: Prisma.FinancialRecordFindManyArgs
  ): Promise<PrismaFinancialRecord[]> {
    return this.prisma.borrower
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .financialRecords(args);
  }

  async findScoreReports(
    parentId: string,
    args: Prisma.ScoreReportFindManyArgs
  ): Promise<PrismaScoreReport[]> {
    return this.prisma.borrower
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .scoreReports(args);
  }
}