import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CreditBureauService } from "./creditBureau.service";
import { CreditBureauControllerBase } from "./base/creditBureau.controller.base";

@swagger.ApiTags("creditBureaus")
@common.Controller("creditBureaus")
export class CreditBureauController extends CreditBureauControllerBase {
  constructor(protected readonly service: CreditBureauService) {
    super(service);
  }
}
