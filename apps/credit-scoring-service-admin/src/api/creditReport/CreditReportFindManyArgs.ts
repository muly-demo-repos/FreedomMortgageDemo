import { CreditReportWhereInput } from "./CreditReportWhereInput";
import { CreditReportOrderByInput } from "./CreditReportOrderByInput";

export type CreditReportFindManyArgs = {
  where?: CreditReportWhereInput;
  orderBy?: Array<CreditReportOrderByInput>;
  skip?: number;
  take?: number;
};
