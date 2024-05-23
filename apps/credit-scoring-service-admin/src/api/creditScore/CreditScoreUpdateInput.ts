import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type CreditScoreUpdateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  generatedAt?: Date | null;
  score?: number | null;
};
