import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { CreditBureauServiceBase } from "./base/creditBureau.service.base";

@Injectable()
export class CreditBureauService extends CreditBureauServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
