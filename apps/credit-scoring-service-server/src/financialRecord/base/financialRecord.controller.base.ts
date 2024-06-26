/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { FinancialRecordService } from "../financialRecord.service";
import { FinancialRecordCreateInput } from "./FinancialRecordCreateInput";
import { FinancialRecord } from "./FinancialRecord";
import { FinancialRecordFindManyArgs } from "./FinancialRecordFindManyArgs";
import { FinancialRecordWhereUniqueInput } from "./FinancialRecordWhereUniqueInput";
import { FinancialRecordUpdateInput } from "./FinancialRecordUpdateInput";

export class FinancialRecordControllerBase {
  constructor(protected readonly service: FinancialRecordService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FinancialRecord })
  async createFinancialRecord(
    @common.Body() data: FinancialRecordCreateInput
  ): Promise<FinancialRecord> {
    return await this.service.createFinancialRecord({
      data: {
        ...data,

        borrower: data.borrower
          ? {
              connect: data.borrower,
            }
          : undefined,
      },
      select: {
        bankStatements: true,

        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        loanHistories: true,
        transactionRecords: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [FinancialRecord] })
  @ApiNestedQuery(FinancialRecordFindManyArgs)
  async financialRecords(
    @common.Req() request: Request
  ): Promise<FinancialRecord[]> {
    const args = plainToClass(FinancialRecordFindManyArgs, request.query);
    return this.service.financialRecords({
      ...args,
      select: {
        bankStatements: true,

        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        loanHistories: true,
        transactionRecords: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FinancialRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async financialRecord(
    @common.Param() params: FinancialRecordWhereUniqueInput
  ): Promise<FinancialRecord | null> {
    const result = await this.service.financialRecord({
      where: params,
      select: {
        bankStatements: true,

        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        id: true,
        loanHistories: true,
        transactionRecords: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FinancialRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateFinancialRecord(
    @common.Param() params: FinancialRecordWhereUniqueInput,
    @common.Body() data: FinancialRecordUpdateInput
  ): Promise<FinancialRecord | null> {
    try {
      return await this.service.updateFinancialRecord({
        where: params,
        data: {
          ...data,

          borrower: data.borrower
            ? {
                connect: data.borrower,
              }
            : undefined,
        },
        select: {
          bankStatements: true,

          borrower: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          loanHistories: true,
          transactionRecords: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FinancialRecord })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteFinancialRecord(
    @common.Param() params: FinancialRecordWhereUniqueInput
  ): Promise<FinancialRecord | null> {
    try {
      return await this.service.deleteFinancialRecord({
        where: params,
        select: {
          bankStatements: true,

          borrower: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          id: true,
          loanHistories: true,
          transactionRecords: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
