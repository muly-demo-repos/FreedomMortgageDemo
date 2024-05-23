import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { BorrowerService } from "./borrower.service";
import { BorrowerControllerBase } from "./base/borrower.controller.base";

@swagger.ApiTags("borrowers")
@common.Controller("borrowers")
export class BorrowerController extends BorrowerControllerBase {
  constructor(protected readonly service: BorrowerService) {
    super(service);
  }
}
