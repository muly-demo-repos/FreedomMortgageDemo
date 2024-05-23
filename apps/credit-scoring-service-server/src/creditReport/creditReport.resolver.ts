import * as graphql from "@nestjs/graphql";
import { CreditReportResolverBase } from "./base/creditReport.resolver.base";
import { CreditReport } from "./base/CreditReport";
import { CreditReportService } from "./creditReport.service";

@graphql.Resolver(() => CreditReport)
export class CreditReportResolver extends CreditReportResolverBase {
  constructor(protected readonly service: CreditReportService) {
    super(service);
  }
}
