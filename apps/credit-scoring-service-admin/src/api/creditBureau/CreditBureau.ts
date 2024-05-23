import { CreditReport } from "../creditReport/CreditReport";

export type CreditBureau = {
  address: string | null;
  createdAt: Date;
  creditReports?: Array<CreditReport>;
  id: string;
  name: string | null;
  updatedAt: Date;
};
