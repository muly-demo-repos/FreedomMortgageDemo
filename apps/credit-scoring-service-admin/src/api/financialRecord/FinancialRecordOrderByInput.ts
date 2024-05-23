import { SortOrder } from "../../util/SortOrder";

export type FinancialRecordOrderByInput = {
  bankStatements?: SortOrder;
  borrowerId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loanHistories?: SortOrder;
  transactionRecords?: SortOrder;
  updatedAt?: SortOrder;
};
