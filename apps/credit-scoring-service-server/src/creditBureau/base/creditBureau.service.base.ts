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
  CreditBureau as PrismaCreditBureau,
  CreditReport as PrismaCreditReport,
} from "@prisma/client";

export class CreditBureauServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.CreditBureauCountArgs, "select">
  ): Promise<number> {
    return this.prisma.creditBureau.count(args);
  }

  async creditBureaus<T extends Prisma.CreditBureauFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditBureauFindManyArgs>
  ): Promise<PrismaCreditBureau[]> {
    return this.prisma.creditBureau.findMany<Prisma.CreditBureauFindManyArgs>(
      args
    );
  }
  async creditBureau<T extends Prisma.CreditBureauFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditBureauFindUniqueArgs>
  ): Promise<PrismaCreditBureau | null> {
    return this.prisma.creditBureau.findUnique(args);
  }
  async createCreditBureau<T extends Prisma.CreditBureauCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditBureauCreateArgs>
  ): Promise<PrismaCreditBureau> {
    return this.prisma.creditBureau.create<T>(args);
  }
  async updateCreditBureau<T extends Prisma.CreditBureauUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditBureauUpdateArgs>
  ): Promise<PrismaCreditBureau> {
    return this.prisma.creditBureau.update<T>(args);
  }
  async deleteCreditBureau<T extends Prisma.CreditBureauDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CreditBureauDeleteArgs>
  ): Promise<PrismaCreditBureau> {
    return this.prisma.creditBureau.delete(args);
  }

  async findCreditReports(
    parentId: string,
    args: Prisma.CreditReportFindManyArgs
  ): Promise<PrismaCreditReport[]> {
    return this.prisma.creditBureau
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .creditReports(args);
  }
}