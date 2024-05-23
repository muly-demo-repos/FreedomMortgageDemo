import { Borrower as TBorrower } from "../api/borrower/Borrower";

export const BORROWER_TITLE_FIELD = "firstName";

export const BorrowerTitle = (record: TBorrower): string => {
  return record.firstName?.toString() || String(record.id);
};
