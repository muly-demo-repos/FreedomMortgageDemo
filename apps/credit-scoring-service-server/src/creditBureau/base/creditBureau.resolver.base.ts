/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreditBureau } from "./CreditBureau";
import { CreditBureauCountArgs } from "./CreditBureauCountArgs";
import { CreditBureauFindManyArgs } from "./CreditBureauFindManyArgs";
import { CreditBureauFindUniqueArgs } from "./CreditBureauFindUniqueArgs";
import { CreateCreditBureauArgs } from "./CreateCreditBureauArgs";
import { UpdateCreditBureauArgs } from "./UpdateCreditBureauArgs";
import { DeleteCreditBureauArgs } from "./DeleteCreditBureauArgs";
import { CreditReportFindManyArgs } from "../../creditReport/base/CreditReportFindManyArgs";
import { CreditReport } from "../../creditReport/base/CreditReport";
import { CreditBureauService } from "../creditBureau.service";
@graphql.Resolver(() => CreditBureau)
export class CreditBureauResolverBase {
  constructor(protected readonly service: CreditBureauService) {}

  async _creditBureausMeta(
    @graphql.Args() args: CreditBureauCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [CreditBureau])
  async creditBureaus(
    @graphql.Args() args: CreditBureauFindManyArgs
  ): Promise<CreditBureau[]> {
    return this.service.creditBureaus(args);
  }

  @graphql.Query(() => CreditBureau, { nullable: true })
  async creditBureau(
    @graphql.Args() args: CreditBureauFindUniqueArgs
  ): Promise<CreditBureau | null> {
    const result = await this.service.creditBureau(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => CreditBureau)
  async createCreditBureau(
    @graphql.Args() args: CreateCreditBureauArgs
  ): Promise<CreditBureau> {
    return await this.service.createCreditBureau({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => CreditBureau)
  async updateCreditBureau(
    @graphql.Args() args: UpdateCreditBureauArgs
  ): Promise<CreditBureau | null> {
    try {
      return await this.service.updateCreditBureau({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => CreditBureau)
  async deleteCreditBureau(
    @graphql.Args() args: DeleteCreditBureauArgs
  ): Promise<CreditBureau | null> {
    try {
      return await this.service.deleteCreditBureau(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [CreditReport], { name: "creditReports" })
  async findCreditReports(
    @graphql.Parent() parent: CreditBureau,
    @graphql.Args() args: CreditReportFindManyArgs
  ): Promise<CreditReport[]> {
    const results = await this.service.findCreditReports(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
