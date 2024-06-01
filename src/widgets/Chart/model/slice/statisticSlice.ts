import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { StatisticSchema } from "../types/statisticSchema";
import { fetchStatisticById } from "../services/fetchStatisticById";
import { StatisticData } from "../types/statistic";

const initialState: StatisticSchema = {
  isLoading: false,
  error: ""
};

export const statisticSlice = createSlice({
  name: "statistic",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchStatisticById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchStatisticById.fulfilled,
        (state, action: PayloadAction<StatisticData>) => {
          state.isLoading = false;
          state.data = action.payload;
        },
      )
      .addCase(fetchStatisticById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { actions: statisticActions } = statisticSlice;
export const { reducer: statisticReducer } = statisticSlice;