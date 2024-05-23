import * as graphql from "@nestjs/graphql";
import { CreditScoreResolverBase } from "./base/creditScore.resolver.base";
import { CreditScore } from "./base/CreditScore";
import { CreditScoreService } from "./creditScore.service";

@graphql.Resolver(() => CreditScore)
export class CreditScoreResolver extends CreditScoreResolverBase {
  constructor(protected readonly service: CreditScoreService) {
    super(service);
  }
}
