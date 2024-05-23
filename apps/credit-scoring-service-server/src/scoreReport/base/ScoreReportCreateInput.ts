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
import { BorrowerWhereUniqueInput } from "../../borrower/base/BorrowerWhereUniqueInput";
import { ValidateNested, IsOptional, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";

@InputType()
class ScoreReportCreateInput {
  @ApiProperty({
    required: false,
    type: () => BorrowerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BorrowerWhereUniqueInput)
  @IsOptional()
  @Field(() => BorrowerWhereUniqueInput, {
    nullable: true,
  })
  borrower?: BorrowerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  generatedAt?: Date | null;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  reportData?: InputJsonValue;
}

export { ScoreReportCreateInput as ScoreReportCreateInput };