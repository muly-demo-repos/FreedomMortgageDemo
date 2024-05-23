import * as graphql from "@nestjs/graphql";
import { ScoreReportResolverBase } from "./base/scoreReport.resolver.base";
import { ScoreReport } from "./base/ScoreReport";
import { ScoreReportService } from "./scoreReport.service";

@graphql.Resolver(() => ScoreReport)
export class ScoreReportResolver extends ScoreReportResolverBase {
  constructor(protected readonly service: ScoreReportService) {
    super(service);
  }
}
