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
import { CreditScoreWhereInput } from "./CreditScoreWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CreditScoreOrderByInput } from "./CreditScoreOrderByInput";

@ArgsType()
class CreditScoreFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CreditScoreWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CreditScoreWhereInput, { nullable: true })
  @Type(() => CreditScoreWhereInput)
  where?: CreditScoreWhereInput;

  @ApiProperty({
    required: false,
    type: [CreditScoreOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CreditScoreOrderByInput], { nullable: true })
  @Type(() => CreditScoreOrderByInput)
  orderBy?: Array<CreditScoreOrderByInput>;

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

export { CreditScoreFindManyArgs as CreditScoreFindManyArgs };
