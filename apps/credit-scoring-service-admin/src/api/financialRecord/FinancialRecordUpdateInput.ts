import { InputJsonValue } from "../../types";
import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type FinancialRecordUpdateInput = {
  bankStatements?: InputJsonValue;
  borrower?: BorrowerWhereUniqueInput | null;
  loanHistories?: InputJsonValue;
  transactionRecords?: InputJsonValue;
};
