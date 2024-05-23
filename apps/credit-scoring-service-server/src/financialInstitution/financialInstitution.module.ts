import { Module } from "@nestjs/common";
import { FinancialInstitutionModuleBase } from "./base/financialInstitution.module.base";
import { FinancialInstitutionService } from "./financialInstitution.service";
import { FinancialInstitutionController } from "./financialInstitution.controller";
import { FinancialInstitutionResolver } from "./financialInstitution.resolver";

@Module({
  imports: [FinancialInstitutionModuleBase],
  controllers: [FinancialInstitutionController],
  providers: [FinancialInstitutionService, FinancialInstitutionResolver],
  exports: [FinancialInstitutionService],
})
export class FinancialInstitutionModule {}
