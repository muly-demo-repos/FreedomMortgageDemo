import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";

export type CreditScoreWhereInput = {
  borrower?: BorrowerWhereUniqueInput;
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  score?: IntNullableFilter;
};
