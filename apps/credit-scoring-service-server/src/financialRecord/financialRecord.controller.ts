import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FinancialRecordService } from "./financialRecord.service";
import { FinancialRecordControllerBase } from "./base/financialRecord.controller.base";

@swagger.ApiTags("financialRecords")
@common.Controller("financialRecords")
export class FinancialRecordController extends FinancialRecordControllerBase {
  constructor(protected readonly service: FinancialRecordService) {
    super(service);
  }
}
