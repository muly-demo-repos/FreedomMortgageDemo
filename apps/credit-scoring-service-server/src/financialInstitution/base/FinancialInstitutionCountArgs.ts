/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FinancialInstitutionWhereInput } from "./FinancialInstitutionWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class FinancialInstitutionCountArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialInstitutionWhereInput,
  })
  @Field(() => FinancialInstitutionWhereInput, { nullable: true })
  @Type(() => FinancialInstitutionWhereInput)
  where?: FinancialInstitutionWhereInput;
}

export { FinancialInstitutionCountArgs as FinancialInstitutionCountArgs };