import { CreditScoreWhereInput } from "./CreditScoreWhereInput";
import { CreditScoreOrderByInput } from "./CreditScoreOrderByInput";

export type CreditScoreFindManyArgs = {
  where?: CreditScoreWhereInput;
  orderBy?: Array<CreditScoreOrderByInput>;
  skip?: number;
  take?: number;
};
