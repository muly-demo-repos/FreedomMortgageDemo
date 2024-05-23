import { CreditReportUpdateManyWithoutBorrowersInput } from "./CreditReportUpdateManyWithoutBorrowersInput";
import { CreditScoreUpdateManyWithoutBorrowersInput } from "./CreditScoreUpdateManyWithoutBorrowersInput";

export type BorrowerUpdateInput = {
  creditReports?: CreditReportUpdateManyWithoutBorrowersInput;
  creditScores?: CreditScoreUpdateManyWithoutBorrowersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  ssn?: string | null;
};
