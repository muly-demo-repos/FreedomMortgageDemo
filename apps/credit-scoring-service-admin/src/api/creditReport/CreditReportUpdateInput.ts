import { BorrowerWhereUniqueInput } from "../borrower/BorrowerWhereUniqueInput";
import { CreditBureauWhereUniqueInput } from "../creditBureau/CreditBureauWhereUniqueInput";

export type CreditReportUpdateInput = {
  borrower?: BorrowerWhereUniqueInput | null;
  creditBureau?: CreditBureauWhereUniqueInput | null;
  details?: string | null;
  reportDate?: Date | null;
};
