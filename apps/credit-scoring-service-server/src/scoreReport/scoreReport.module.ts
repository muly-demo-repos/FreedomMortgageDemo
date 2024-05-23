import { Module } from "@nestjs/common";
import { ScoreReportModuleBase } from "./base/scoreReport.module.base";
import { ScoreReportService } from "./scoreReport.service";
import { ScoreReportController } from "./scoreReport.controller";
import { ScoreReportResolver } from "./scoreReport.resolver";

@Module({
  imports: [ScoreReportModuleBase],
  controllers: [ScoreReportController],
  providers: [ScoreReportService, ScoreReportResolver],
  exports: [ScoreReportService],
})
export class ScoreReportModule {}
