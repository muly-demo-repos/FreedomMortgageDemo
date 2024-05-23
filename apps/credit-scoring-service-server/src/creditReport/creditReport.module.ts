import { Module } from "@nestjs/common";
import { CreditReportModuleBase } from "./base/creditReport.module.base";
import { CreditReportService } from "./creditReport.service";
import { CreditReportController } from "./creditReport.controller";
import { CreditReportResolver } from "./creditReport.resolver";

@Module({
  imports: [CreditReportModuleBase],
  controllers: [CreditReportController],
  providers: [CreditReportService, CreditReportResolver],
  exports: [CreditReportService],
})
export class CreditReportModule {}
