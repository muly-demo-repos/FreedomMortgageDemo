import * as graphql from "@nestjs/graphql";
import { FinancialRecordResolverBase } from "./base/financialRecord.resolver.base";
import { FinancialRecord } from "./base/FinancialRecord";
import { FinancialRecordService } from "./financialRecord.service";

@graphql.Resolver(() => FinancialRecord)
export class FinancialRecordResolver extends FinancialRecordResolverBase {
  constructor(protected readonly service: FinancialRecordService) {
    super(service);
  }
}
