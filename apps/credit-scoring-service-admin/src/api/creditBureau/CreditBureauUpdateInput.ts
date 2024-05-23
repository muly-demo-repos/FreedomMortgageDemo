import { CreditReportUpdateManyWithoutCreditBureausInput } from "./CreditReportUpdateManyWithoutCreditBureausInput";

export type CreditBureauUpdateInput = {
  address?: string | null;
  creditReports?: CreditReportUpdateManyWithoutCreditBureausInput;
  name?: string | null;
};
