import { ScoreReport as TScoreReport } from "../api/scoreReport/ScoreReport";

export const SCOREREPORT_TITLE_FIELD = "id";

export const ScoreReportTitle = (record: TScoreReport): string => {
  return record.id?.toString() || String(record.id);
};
