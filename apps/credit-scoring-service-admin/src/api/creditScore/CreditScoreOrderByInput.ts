import { SortOrder } from "../../util/SortOrder";

export type CreditScoreOrderByInput = {
  borrowerId?: SortOrder;
  comment?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  scoreDate?: SortOrder;
  updatedAt?: SortOrder;
};
