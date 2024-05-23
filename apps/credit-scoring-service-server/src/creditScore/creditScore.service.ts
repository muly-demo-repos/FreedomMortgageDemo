import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditScoreServiceBase } from "./base/creditScore.service.base";

@Injectable()
export class CreditScoreService extends CreditScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
