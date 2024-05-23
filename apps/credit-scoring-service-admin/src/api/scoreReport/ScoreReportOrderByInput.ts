import { SortOrder } from "../../util/SortOrder";

export type ScoreReportOrderByInput = {
  borrowerId?: SortOrder;
  createdAt?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  reportData?: SortOrder;
  updatedAt?: SortOrder;
};
