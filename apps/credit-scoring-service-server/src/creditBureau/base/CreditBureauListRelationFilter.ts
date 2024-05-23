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
import { CreditBureauWhereInput } from "./CreditBureauWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreditBureauListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => CreditBureauWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditBureauWhereInput)
  @IsOptional()
  @Field(() => CreditBureauWhereInput, {
    nullable: true,
  })
  every?: CreditBureauWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreditBureauWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditBureauWhereInput)
  @IsOptional()
  @Field(() => CreditBureauWhereInput, {
    nullable: true,
  })
  some?: CreditBureauWhereInput;

  @ApiProperty({
    required: false,
    type: () => CreditBureauWhereInput,
  })
  @ValidateNested()
  @Type(() => CreditBureauWhereInput)
  @IsOptional()
  @Field(() => CreditBureauWhereInput, {
    nullable: true,
  })
  none?: CreditBureauWhereInput;
}
export { CreditBureauListRelationFilter as CreditBureauListRelationFilter };
