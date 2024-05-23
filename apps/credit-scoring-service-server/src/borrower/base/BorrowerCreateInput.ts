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
import { CreditReportCreateNestedManyWithoutBorrowersInput } from "./CreditReportCreateNestedManyWithoutBorrowersInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CreditScoreCreateNestedManyWithoutBorrowersInput } from "./CreditScoreCreateNestedManyWithoutBorrowersInput";

@InputType()
class BorrowerCreateInput {
  @ApiProperty({
    required: false,
    type: () => CreditReportCreateNestedManyWithoutBorrowersInput,
  })
  @ValidateNested()
  @Type(() => CreditReportCreateNestedManyWithoutBorrowersInput)
  @IsOptional()
  @Field(() => CreditReportCreateNestedManyWithoutBorrowersInput, {
    nullable: true,
  })
  creditReports?: CreditReportCreateNestedManyWithoutBorrowersInput;

  @ApiProperty({
    required: false,
    type: () => CreditScoreCreateNestedManyWithoutBorrowersInput,
  })
  @ValidateNested()
  @Type(() => CreditScoreCreateNestedManyWithoutBorrowersInput)
  @IsOptional()
  @Field(() => CreditScoreCreateNestedManyWithoutBorrowersInput, {
    nullable: true,
  })
  creditScores?: CreditScoreCreateNestedManyWithoutBorrowersInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  ssn?: string | null;
}

export { BorrowerCreateInput as BorrowerCreateInput };
