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
import { ScoreReportService } from "../scoreReport.service";
import { ScoreReportCreateInput } from "./ScoreReportCreateInput";
import { ScoreReport } from "./ScoreReport";
import { ScoreReportFindManyArgs } from "./ScoreReportFindManyArgs";
import { ScoreReportWhereUniqueInput } from "./ScoreReportWhereUniqueInput";
import { ScoreReportUpdateInput } from "./ScoreReportUpdateInput";

export class ScoreReportControllerBase {
  constructor(protected readonly service: ScoreReportService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScoreReport })
  async createScoreReport(
    @common.Body() data: ScoreReportCreateInput
  ): Promise<ScoreReport> {
    return await this.service.createScoreReport({
      data: {
        ...data,

        borrower: data.borrower
          ? {
              connect: data.borrower,
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
        generatedAt: true,
        id: true,
        reportData: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [ScoreReport] })
  @ApiNestedQuery(ScoreReportFindManyArgs)
  async scoreReports(@common.Req() request: Request): Promise<ScoreReport[]> {
    const args = plainToClass(ScoreReportFindManyArgs, request.query);
    return this.service.scoreReports({
      ...args,
      select: {
        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        generatedAt: true,
        id: true,
        reportData: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScoreReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async scoreReport(
    @common.Param() params: ScoreReportWhereUniqueInput
  ): Promise<ScoreReport | null> {
    const result = await this.service.scoreReport({
      where: params,
      select: {
        borrower: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        generatedAt: true,
        id: true,
        reportData: true,
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
  @swagger.ApiOkResponse({ type: ScoreReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateScoreReport(
    @common.Param() params: ScoreReportWhereUniqueInput,
    @common.Body() data: ScoreReportUpdateInput
  ): Promise<ScoreReport | null> {
    try {
      return await this.service.updateScoreReport({
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
          borrower: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          generatedAt: true,
          id: true,
          reportData: true,
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
  @swagger.ApiOkResponse({ type: ScoreReport })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteScoreReport(
    @common.Param() params: ScoreReportWhereUniqueInput
  ): Promise<ScoreReport | null> {
    try {
      return await this.service.deleteScoreReport({
        where: params,
        select: {
          borrower: {
            select: {
              id: true,
            },
          },

          createdAt: true,
          generatedAt: true,
          id: true,
          reportData: true,
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
