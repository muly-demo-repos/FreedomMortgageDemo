import { CreditReportListRelationFilter } from "../creditReport/CreditReportListRelationFilter";
import { CreditScoreListRelationFilter } from "../creditScore/CreditScoreListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BorrowerWhereInput = {
  creditReports?: CreditReportListRelationFilter;
  creditScores?: CreditScoreListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  ssn?: StringNullableFilter;
};
