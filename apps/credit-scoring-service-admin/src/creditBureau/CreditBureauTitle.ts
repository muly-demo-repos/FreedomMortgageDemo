import { CreditBureau as TCreditBureau } from "../api/creditBureau/CreditBureau";

export const CREDITBUREAU_TITLE_FIELD = "name";

export const CreditBureauTitle = (record: TCreditBureau): string => {
  return record.name?.toString() || String(record.id);
};
