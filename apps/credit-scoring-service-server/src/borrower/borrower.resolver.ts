import * as graphql from "@nestjs/graphql";
import { BorrowerResolverBase } from "./base/borrower.resolver.base";
import { Borrower } from "./base/Borrower";
import { BorrowerService } from "./borrower.service";

@graphql.Resolver(() => Borrower)
export class BorrowerResolver extends BorrowerResolverBase {
  constructor(protected readonly service: BorrowerService) {
    super(service);
  }
}
