import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditReportService } from "./creditReport.service";
import { CreditReportControllerBase } from "./base/creditReport.controller.base";

@swagger.ApiTags("creditReports")
@common.Controller("creditReports")
export class CreditReportController extends CreditReportControllerBase {
  constructor(protected readonly service: CreditReportService) {
    super(service);
  }
}
