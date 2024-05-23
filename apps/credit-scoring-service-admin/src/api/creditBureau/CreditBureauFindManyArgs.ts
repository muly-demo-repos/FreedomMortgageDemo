import { CreditBureauWhereInput } from "./CreditBureauWhereInput";
import { CreditBureauOrderByInput } from "./CreditBureauOrderByInput";

export type CreditBureauFindManyArgs = {
  where?: CreditBureauWhereInput;
  orderBy?: Array<CreditBureauOrderByInput>;
  skip?: number;
  take?: number;
};
