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
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsDate,
} from "class-validator";
import { Type } from "class-transformer";

@InputType()
class CreditScoreCreateInput {
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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comment?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  score?: number | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  scoreDate?: Date | null;
}

export { CreditScoreCreateInput as CreditScoreCreateInput };
