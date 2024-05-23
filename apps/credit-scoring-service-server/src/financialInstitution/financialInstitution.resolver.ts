import * as graphql from "@nestjs/graphql";
import { FinancialInstitutionResolverBase } from "./base/financialInstitution.resolver.base";
import { FinancialInstitution } from "./base/FinancialInstitution";
import { FinancialInstitutionService } from "./financialInstitution.service";

@graphql.Resolver(() => FinancialInstitution)
export class FinancialInstitutionResolver extends FinancialInstitutionResolverBase {
  constructor(protected readonly service: FinancialInstitutionService) {
    super(service);
  }
}
