import * as graphql from "@nestjs/graphql";
import { CreditBureauResolverBase } from "./base/creditBureau.resolver.base";
import { CreditBureau } from "./base/CreditBureau";
import { CreditBureauService } from "./creditBureau.service";

@graphql.Resolver(() => CreditBureau)
export class CreditBureauResolver extends CreditBureauResolverBase {
  constructor(protected readonly service: CreditBureauService) {
    super(service);
  }
}
