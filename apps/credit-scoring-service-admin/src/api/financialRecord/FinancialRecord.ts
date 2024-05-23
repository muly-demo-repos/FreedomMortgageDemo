import { JsonValue } from "type-fest";
import { Borrower } from "../borrower/Borrower";

export type FinancialRecord = {
  bankStatements: JsonValue;
  borrower?: Borrower | null;
  createdAt: Date;
  id: string;
  loanHistories: JsonValue;
  transactionRecords: JsonValue;
  updatedAt: Date;
};
