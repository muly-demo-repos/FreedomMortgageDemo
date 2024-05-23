import { CreditReport } from "../creditReport/CreditReport";
import { CreditScore } from "../creditScore/CreditScore";

export type Borrower = {
  createdAt: Date;
  creditReports?: Array<CreditReport>;
  creditScores?: Array<CreditScore>;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  ssn: string | null;
  updatedAt: Date;
};
