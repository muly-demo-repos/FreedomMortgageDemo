import { BorrowerWhereInput } from "./BorrowerWhereInput";
import { BorrowerOrderByInput } from "./BorrowerOrderByInput";

export type BorrowerFindManyArgs = {
  where?: BorrowerWhereInput;
  orderBy?: Array<BorrowerOrderByInput>;
  skip?: number;
  take?: number;
};
