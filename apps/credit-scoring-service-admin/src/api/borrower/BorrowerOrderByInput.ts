import { SortOrder } from "../../util/SortOrder";

export type BorrowerOrderByInput = {
  createdAt?: SortOrder;
  dateOfBirth?: SortOrder;
  email?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  ssn?: SortOrder;
  updatedAt?: SortOrder;
};
