import { Borrower } from "../borrower/Borrower";

export type CreditScore = {
  borrower?: Borrower | null;
  createdAt: Date;
  generatedAt: Date | null;
  id: string;
  score: number | null;
  updatedAt: Date;
};
