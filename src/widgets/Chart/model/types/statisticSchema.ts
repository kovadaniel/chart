import { StatisticData } from "./statistic";

export interface StatisticSchema {
    data?: StatisticData;
    isLoading: boolean;
    error?: string;
}
