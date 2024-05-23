import { Borrower } from "../borrower/Borrower";
import { CreditBureau } from "../creditBureau/CreditBureau";

export type CreditReport = {
  borrower?: Borrower | null;
  createdAt: Date;
  creditBureau?: CreditBureau | null;
  details: string | null;
  id: string;
  reportDate: Date | null;
  updatedAt: Date;
};
