import { FinancialInstitutionWhereInput } from "./FinancialInstitutionWhereInput";
import { FinancialInstitutionOrderByInput } from "./FinancialInstitutionOrderByInput";

export type FinancialInstitutionFindManyArgs = {
  where?: FinancialInstitutionWhereInput;
  orderBy?: Array<FinancialInstitutionOrderByInput>;
  skip?: number;
  take?: number;
};
