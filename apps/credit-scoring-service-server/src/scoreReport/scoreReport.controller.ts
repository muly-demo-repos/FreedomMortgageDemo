import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ScoreReportService } from "./scoreReport.service";
import { ScoreReportControllerBase } from "./base/scoreReport.controller.base";

@swagger.ApiTags("scoreReports")
@common.Controller("scoreReports")
export class ScoreReportController extends ScoreReportControllerBase {
  constructor(protected readonly service: ScoreReportService) {
    super(service);
  }
}
