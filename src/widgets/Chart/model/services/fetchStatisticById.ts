import { createAsyncThunk } from "@reduxjs/toolkit";
import { StatisticData } from "../types/statistic";
import { ThunkConfig } from "app/providers/storeProvider/config/StateSchema";

export const fetchStatisticById = createAsyncThunk<
    StatisticData,
    string | undefined,
    ThunkConfig<string>
>('statistic/fetchStatisticById', async (statisticId, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    if (!statisticId) {
        throw new Error('');
    }

    try {
        const response = await extra.api.get<StatisticData>(
            `/ttrp${statisticId}.json`
        );

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        console.log(e);
        return rejectWithValue('error');
    }
})

export {};