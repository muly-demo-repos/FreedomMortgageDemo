import { CreditScore as TCreditScore } from "../api/creditScore/CreditScore";

export const CREDITSCORE_TITLE_FIELD = "comment";

export const CreditScoreTitle = (record: TCreditScore): string => {
  return record.comment?.toString() || String(record.id);
};
