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
import { ValidateNested, IsOptional, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";
import { CreditBureauWhereUniqueInput } from "../../creditBureau/base/CreditBureauWhereUniqueInput";

@InputType()
class CreditReportCreateInput {
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
    type: () => CreditBureauWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CreditBureauWhereUniqueInput)
  @IsOptional()
  @Field(() => CreditBureauWhereUniqueInput, {
    nullable: true,
  })
  creditBureau?: CreditBureauWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  details?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  reportDate?: Date | null;
}

export { CreditReportCreateInput as CreditReportCreateInput };
