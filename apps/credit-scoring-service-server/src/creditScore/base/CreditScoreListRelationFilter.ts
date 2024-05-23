/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CreditScoreWhereInput } from "./CreditScoreWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreditScoreListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreditScoreWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditScoreWhereInput)
  @IsOptional()
  @Field(() => CreditScoreWhereInput, {
    nullable: true,
  })
  every?: CreditScoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreditScoreWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditScoreWhereInput)
  @IsOptional()
  @Field(() => CreditScoreWhereInput, {
    nullable: true,
  })
  some?: CreditScoreWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreditScoreWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditScoreWhereInput)
  @IsOptional()
  @Field(() => CreditScoreWhereInput, {
    nullable: true,
  })
  none?: CreditScoreWhereInput;
}
export { CreditScoreListRelationFilter as CreditScoreListRelationFilter };