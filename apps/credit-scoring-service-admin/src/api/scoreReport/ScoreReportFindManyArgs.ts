import { ScoreReportWhereInput } from "./ScoreReportWhereInput";
import { ScoreReportOrderByInput } from "./ScoreReportOrderByInput";

export type ScoreReportFindManyArgs = {
  where?: ScoreReportWhereInput;
  orderBy?: Array<ScoreReportOrderByInput>;
  skip?: number;
  take?: number;
};
