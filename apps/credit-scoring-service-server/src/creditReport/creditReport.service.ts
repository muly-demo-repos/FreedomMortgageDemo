import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditReportServiceBase } from "./base/creditReport.service.base";

@Injectable()
export class CreditReportService extends CreditReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
