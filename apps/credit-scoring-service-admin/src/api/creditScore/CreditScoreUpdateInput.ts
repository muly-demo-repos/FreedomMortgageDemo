import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type CreditScoreUpdateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  score?: number | null;
  scoreDate?: Date | null;
};
