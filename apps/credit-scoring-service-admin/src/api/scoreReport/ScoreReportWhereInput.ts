import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type ScoreReportWhereInput = {
  borrower?: BorrowerWhereUniqueInput;
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  reportData?: JsonFilter;
};
