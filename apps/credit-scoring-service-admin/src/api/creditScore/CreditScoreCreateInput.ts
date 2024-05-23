import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type CreditScoreCreateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  score?: number | null;
  scoreDate?: Date | null;
};
