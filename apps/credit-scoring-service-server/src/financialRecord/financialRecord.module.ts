import { Module } from "@nestjs/common";
import { FinancialRecordModuleBase } from "./base/financialRecord.module.base";
import { FinancialRecordService } from "./financialRecord.service";
import { FinancialRecordController } from "./financialRecord.controller";
import { FinancialRecordResolver } from "./financialRecord.resolver";

@Module({
  imports: [FinancialRecordModuleBase],
  controllers: [FinancialRecordController],
  providers: [FinancialRecordService, FinancialRecordResolver],
  exports: [FinancialRecordService],
})
export class FinancialRecordModule {}
