import { SortOrder } from "../../util/SortOrder";

export type CreditReportOrderByInput = {
  borrowerId?: SortOrder;
  createdAt?: SortOrder;
  creditBureauId?: SortOrder;
  details?: SortOrder;
  id?: SortOrder;
  reportDate?: SortOrder;
  updatedAt?: SortOrder;
};
