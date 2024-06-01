import { StateSchema } from "app/providers/storeProvider";

export const getStatisticData = (state: StateSchema) =>
  state.statistic;