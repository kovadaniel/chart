import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "shared/api/api";
import { statisticReducer } from "widgets/Chart";
import { ThunkExtraArg } from "./StateSchema";

const rootReducer = combineReducers({
  statistic: statisticReducer,
})

const extraArg: ThunkExtraArg = {
  api: api,
};

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      thunk: {
        extraArgument: extraArg,
      },
    }),
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']

