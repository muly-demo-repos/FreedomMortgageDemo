import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { BorrowerServiceBase } from "./base/borrower.service.base";

@Injectable()
export class BorrowerService extends BorrowerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
