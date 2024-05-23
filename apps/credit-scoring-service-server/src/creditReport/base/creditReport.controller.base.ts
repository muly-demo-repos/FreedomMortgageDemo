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
import { CreditReportService } from "../creditReport.service";
import { CreditReportCreateInput } from "./CreditReportCreateInput";
import { CreditReport } from "./CreditReport";
import { CreditReportFindManyArgs } from "./CreditReportFindManyArgs";
import { CreditReportWhereUniqueInput } from "./CreditReportWhereUniqueInput";
import { CreditReportUpdateInput } from "./CreditReportUpdateInput";

export class CreditReportControllerBase {
  constructor(protected readonly service: CreditReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: CreditReport })
  async createCreditReport(
    @common.Body() data: CreditReportCreateInput
  ): Promise<CreditReport> {
    return await this.service.createCreditReport({
      data: {
        ...data,

        borrower: data.borrower
          ? {
              connect: data.borrower,
            }
          : undefined,

        creditBureau: data.creditBureau
          ? {
              connect: data.creditBureau,
            }
          : undefined,
      },
      select: {
        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        creditBureau: {
          select: {
            id: true,
          },
        },

        details: true,
        id: true,
        reportDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [CreditReport] })
  @ApiNestedQuery(CreditReportFindManyArgs)
  async creditReports(@common.Req() request: Request): Promise<CreditReport[]> {
    const args = plainToClass(CreditReportFindManyArgs, request.query);
    return this.service.creditReports({
      ...args,
      select: {
        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        creditBureau: {
          select: {
            id: true,
          },
        },

        details: true,
        id: true,
        reportDate: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: CreditReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async creditReport(
    @common.Param() params: CreditReportWhereUniqueInput
  ): Promise<CreditReport | null> {
    const result = await this.service.creditReport({
      where: params,
      select: {
        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,

        creditBureau: {
          select: {
            id: true,
          },
        },

        details: true,
        id: true,
        reportDate: true,
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
  @swagger.ApiOkResponse({ type: CreditReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateCreditReport(
    @common.Param() params: CreditReportWhereUniqueInput,
    @common.Body() data: CreditReportUpdateInput
  ): Promise<CreditReport | null> {
    try {
      return await this.service.updateCreditReport({
        where: params,
        data: {
          ...data,

          borrower: data.borrower
            ? {
                connect: data.borrower,
              }
            : undefined,

          creditBureau: data.creditBureau
            ? {
                connect: data.creditBureau,
              }
            : undefined,
        },
        select: {
          borrower: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          creditBureau: {
            select: {
              id: true,
            },
          },

          details: true,
          id: true,
          reportDate: true,
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
  @swagger.ApiOkResponse({ type: CreditReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteCreditReport(
    @common.Param() params: CreditReportWhereUniqueInput
  ): Promise<CreditReport | null> {
    try {
      return await this.service.deleteCreditReport({
        where: params,
        select: {
          borrower: {
            select: {
              id: true,
            },
          },

          createdAt: true,

          creditBureau: {
            select: {
              id: true,
            },
          },

          details: true,
          id: true,
          reportDate: true,
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