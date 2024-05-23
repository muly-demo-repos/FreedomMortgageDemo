import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type CreditScoreUpdateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  comment?: string | null;
  score?: number | null;
  scoreDate?: Date | null;
};
