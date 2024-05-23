import { CreditScoreCreateNestedManyWithoutBorrowersInput } from "./CreditScoreCreateNestedManyWithoutBorrowersInput";
import { FinancialRecordCreateNestedManyWithoutBorrowersInput } from "./FinancialRecordCreateNestedManyWithoutBorrowersInput";
import { ScoreReportCreateNestedManyWithoutBorrowersInput } from "./ScoreReportCreateNestedManyWithoutBorrowersInput";

export type BorrowerCreateInput = {
  creditScores?: CreditScoreCreateNestedManyWithoutBorrowersInput;
  dateOfBirth?: Date | null;
  email?: string | null;
  financialRecords?: FinancialRecordCreateNestedManyWithoutBorrowersInput;
  firstName?: string | null;
  lastName?: string | null;
  phoneNumber?: string | null;
  scoreReports?: ScoreReportCreateNestedManyWithoutBorrowersInput;
};
