import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CreditScoreWhereInput = {
  borrower?: BorrowerWhereUniqueInput;
  comment?: StringNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
  scoreDate?: DateTimeNullableFilter;
};
