import { Borrower } from "../borrower/Borrower";

export type CreditScore = {
  borrower?: Borrower | null;
  createdAt: Date;
  id: string;
  score: number | null;
  scoreDate: Date | null;
  updatedAt: Date;
};
