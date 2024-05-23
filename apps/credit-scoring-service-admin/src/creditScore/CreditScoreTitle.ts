import { CreditScore as TCreditScore } from "../api/creditScore/CreditScore";

export const CREDITSCORE_TITLE_FIELD = "id";

export const CreditScoreTitle = (record: TCreditScore): string => {
  return record.id?.toString() || String(record.id);
};
