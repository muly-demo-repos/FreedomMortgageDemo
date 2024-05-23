import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditScoreService } from "./creditScore.service";
import { CreditScoreControllerBase } from "./base/creditScore.controller.base";

@swagger.ApiTags("creditScores")
@common.Controller("creditScores")
export class CreditScoreController extends CreditScoreControllerBase {
  constructor(protected readonly service: CreditScoreService) {
    super(service);
  }
}
