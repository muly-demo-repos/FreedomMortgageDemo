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
import { BorrowerWhereInput } from "./BorrowerWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BorrowerOrderByInput } from "./BorrowerOrderByInput";

@ArgsType()
class BorrowerFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BorrowerWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BorrowerWhereInput, { nullable: true })
  @Type(() => BorrowerWhereInput)
  where?: BorrowerWhereInput;

  @ApiProperty({
    required: false,
    type: [BorrowerOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BorrowerOrderByInput], { nullable: true })
  @Type(() => BorrowerOrderByInput)
  orderBy?: Array<BorrowerOrderByInput>;

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

export { BorrowerFindManyArgs as BorrowerFindManyArgs };
