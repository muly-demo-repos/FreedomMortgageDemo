import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { CreditBureauWhereUniqueInput } from "../creditBureau/CreditBureauWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type CreditReportWhereInput = {
  borrower?: BorrowerWhereUniqueInput;
  creditBureau?: CreditBureauWhereUniqueInput;
  details?: StringNullableFilter;
  id?: StringFilter;
  reportDate?: DateTimeNullableFilter;
};
