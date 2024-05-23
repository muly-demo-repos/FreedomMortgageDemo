import { CreditReport as TCreditReport } from "../api/creditReport/CreditReport";

export const CREDITREPORT_TITLE_FIELD = "id";

export const CreditReportTitle = (record: TCreditReport): string => {
  return record.id?.toString() || String(record.id);
};
