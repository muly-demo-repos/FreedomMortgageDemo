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
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { FinancialInstitutionOrderByInput } from "./FinancialInstitutionOrderByInput";

@ArgsType()
class FinancialInstitutionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => FinancialInstitutionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => FinancialInstitutionWhereInput, { nullable: true })
  @Type(() => FinancialInstitutionWhereInput)
  where?: FinancialInstitutionWhereInput;

  @ApiProperty({
    required: false,
    type: [FinancialInstitutionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [FinancialInstitutionOrderByInput], { nullable: true })
  @Type(() => FinancialInstitutionOrderByInput)
  orderBy?: Array<FinancialInstitutionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { FinancialInstitutionFindManyArgs as FinancialInstitutionFindManyArgs };
