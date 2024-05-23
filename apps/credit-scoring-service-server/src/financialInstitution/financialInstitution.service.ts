import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FinancialInstitutionServiceBase } from "./base/financialInstitution.service.base";

@Injectable()
export class FinancialInstitutionService extends FinancialInstitutionServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
