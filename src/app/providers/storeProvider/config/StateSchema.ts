import { AxiosInstance } from "axios";
import { StatisticSchema } from "widgets/Chart";

export interface StateSchema {
  statistic: StatisticSchema
}

export interface ThunkExtraArg {
  api: AxiosInstance;
}

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}