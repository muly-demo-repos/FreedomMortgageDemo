import { CreditReportCreateNestedManyWithoutBorrowersInput } from "./CreditReportCreateNestedManyWithoutBorrowersInput";
import { CreditScoreCreateNestedManyWithoutBorrowersInput } from "./CreditScoreCreateNestedManyWithoutBorrowersInput";

export type BorrowerCreateInput = {
  creditReports?: CreditReportCreateNestedManyWithoutBorrowersInput;
  creditScores?: CreditScoreCreateNestedManyWithoutBorrowersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  ssn?: string | null;
};
