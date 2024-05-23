import { CreditScoreListRelationFilter } from "../creditScore/CreditScoreListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FinancialRecordListRelationFilter } from "../financialRecord/FinancialRecordListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { ScoreReportListRelationFilter } from "../scoreReport/ScoreReportListRelationFilter";

export type BorrowerWhereInput = {
  creditScores?: CreditScoreListRelationFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  financialRecords?: FinancialRecordListRelationFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  scoreReports?: ScoreReportListRelationFilter;
};
