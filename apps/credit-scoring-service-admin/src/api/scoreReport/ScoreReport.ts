import { Borrower } from "../borrower/Borrower";
import { JsonValue } from "type-fest";

export type ScoreReport = {
  borrower?: Borrower | null;
  createdAt: Date;
  generatedAt: Date | null;
  id: string;
  reportData: JsonValue;
  updatedAt: Date;
};
