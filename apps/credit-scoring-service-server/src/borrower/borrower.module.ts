import { Module } from "@nestjs/common";
import { BorrowerModuleBase } from "./base/borrower.module.base";
import { BorrowerService } from "./borrower.service";
import { BorrowerController } from "./borrower.controller";
import { BorrowerResolver } from "./borrower.resolver";

@Module({
  imports: [BorrowerModuleBase],
  controllers: [BorrowerController],
  providers: [BorrowerService, BorrowerResolver],
  exports: [BorrowerService],
})
export class BorrowerModule {}
