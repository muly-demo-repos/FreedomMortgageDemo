import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ScoreReportUpdateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  generatedAt?: Date | null;
  reportData?: InputJsonValue;
};
