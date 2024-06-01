import { Metric } from "widgets/Chart";

export interface ChartColumnProps {
  className?: string;
  title: string;
  metric: Metric | number;
  delta: number;
}
