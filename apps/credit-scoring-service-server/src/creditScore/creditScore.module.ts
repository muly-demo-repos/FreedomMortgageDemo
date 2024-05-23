import { Module } from "@nestjs/common";
import { CreditScoreModuleBase } from "./base/creditScore.module.base";
import { CreditScoreService } from "./creditScore.service";
import { CreditScoreController } from "./creditScore.controller";
import { CreditScoreResolver } from "./creditScore.resolver";

@Module({
  imports: [CreditScoreModuleBase],
  controllers: [CreditScoreController],
  providers: [CreditScoreService, CreditScoreResolver],
  exports: [CreditScoreService],
})
export class CreditScoreModule {}
