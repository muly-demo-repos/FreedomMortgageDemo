import { CreditScoreUpdateManyWithoutBorrowersInput } from "./CreditScoreUpdateManyWithoutBorrowersInput";
import { FinancialRecordUpdateManyWithoutBorrowersInput } from "./FinancialRecordUpdateManyWithoutBorrowersInput";
import { ScoreReportUpdateManyWithoutBorrowersInput } from "./ScoreReportUpdateManyWithoutBorrowersInput";

export type BorrowerUpdateInput = {
  creditScores?: CreditScoreUpdateManyWithoutBorrowersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  financialRecords?: FinancialRecordUpdateManyWithoutBorrowersInput;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  scoreReports?: ScoreReportUpdateManyWithoutBorrowersInput;
};
