import { CreditReportCreateNestedManyWithoutCreditBureausInput } from "./CreditReportCreateNestedManyWithoutCreditBureausInput";

export type CreditBureauCreateInput = {
  address?: string | null;
  creditReports?: CreditReportCreateNestedManyWithoutCreditBureausInput;
  name?: string | null;
};
