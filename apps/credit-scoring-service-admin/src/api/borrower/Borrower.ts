import { CreditScore } from "../creditScore/CreditScore";
import { FinancialRecord } from "../financialRecord/FinancialRecord";
import { ScoreReport } from "../scoreReport/ScoreReport";

export type Borrower = {
  createdAt: Date;
  creditScores?: Array<CreditScore>;
  dateOfBirth: Date | null;
  email: string | null;
  financialRecords?: Array<FinancialRecord>;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phoneNumber: string | null;
  scoreReports?: Array<ScoreReport>;
  updatedAt: Date;
};
