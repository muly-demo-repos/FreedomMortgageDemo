import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";

export type CreditScoreCreateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  generatedAt?: Date | null;
  score?: number | null;
};
