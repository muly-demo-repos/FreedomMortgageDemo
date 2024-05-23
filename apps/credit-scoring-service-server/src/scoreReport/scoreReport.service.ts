import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ScoreReportServiceBase } from "./base/scoreReport.service.base";

@Injectable()
export class ScoreReportService extends ScoreReportServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
