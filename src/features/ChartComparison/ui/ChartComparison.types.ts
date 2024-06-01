import { Metric } from "widgets/Chart";

export interface ChartComparisonProps {
  className?: string;
  from: Metric;
  to: Metric;
}
