import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinancialInstitutionService } from "./financialInstitution.service";
import { FinancialInstitutionControllerBase } from "./base/financialInstitution.controller.base";

@swagger.ApiTags("financialInstitutions")
@common.Controller("financialInstitutions")
export class FinancialInstitutionController extends FinancialInstitutionControllerBase {
  constructor(protected readonly service: FinancialInstitutionService) {
    super(service);
  }
}
