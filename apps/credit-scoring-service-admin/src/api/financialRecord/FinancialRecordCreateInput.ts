import { InputJsonValue } from "../../types";
import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type FinancialRecordCreateInput = {
  bankStatements?: InputJsonValue;
  borrower?: BorrowerWhereUniqueInput | null;
  loanHistories?: InputJsonValue;
  transactionRecords?: InputJsonValue;
};
