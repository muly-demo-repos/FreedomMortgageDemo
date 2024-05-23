import { FinancialInstitution as TFinancialInstitution } from "../api/financialInstitution/FinancialInstitution";

export const FINANCIALINSTITUTION_TITLE_FIELD = "name";

export const FinancialInstitutionTitle = (
  record: TFinancialInstitution
): string => {
  return record.name?.toString() || String(record.id);
};
