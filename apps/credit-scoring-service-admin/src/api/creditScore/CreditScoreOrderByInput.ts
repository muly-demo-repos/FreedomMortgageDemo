import { SortOrder } from "../../util/SortOrder";

export type CreditScoreOrderByInput = {
  borrowerId?: SortOrder;
  createdAt?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
