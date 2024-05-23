import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type ScoreReportCreateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  generatedAt?: Date | null;
  reportData?: InputJsonValue;
};
