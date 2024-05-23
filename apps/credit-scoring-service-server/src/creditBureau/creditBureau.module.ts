import { Module } from "@nestjs/common";
import { CreditBureauModuleBase } from "./base/creditBureau.module.base";
import { CreditBureauService } from "./creditBureau.service";
import { CreditBureauController } from "./creditBureau.controller";
import { CreditBureauResolver } from "./creditBureau.resolver";

@Module({
  imports: [CreditBureauModuleBase],
  controllers: [CreditBureauController],
  providers: [CreditBureauService, CreditBureauResolver],
  exports: [CreditBureauService],
})
export class CreditBureauModule {}
