import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CreditScoreWhereInput = {
  borrower?: BorrowerWhereUniqueInput;
  id?: StringFilter;
  score?: IntNullableFilter;
  scoreDate?: DateTimeNullableFilter;
};
