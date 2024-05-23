import { JsonFilter } from "../../util/JsonFilter";
import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type FinancialRecordWhereInput = {
  bankStatements?: JsonFilter;
  borrower?: BorrowerWhereUniqueInput;
  id?: StringFilter;
  loanHistories?: JsonFilter;
  transactionRecords?: JsonFilter;
};
