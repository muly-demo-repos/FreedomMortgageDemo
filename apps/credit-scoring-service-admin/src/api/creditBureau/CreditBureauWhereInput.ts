import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CreditReportListRelationFilter } from "../creditReport/CreditReportListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type CreditBureauWhereInput = {
  address?: StringNullableFilter;
  creditReports?: CreditReportListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
