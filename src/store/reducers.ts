import { combineReducers } from "redux";
import { deviseReducer } from "./devise/Devise.reducers";
import { countriesReducer } from "./countries/Countries.reducers";

export const rootReducers = combineReducers({
  deviseReducer,
  countriesReducer
});

export type AppState = ReturnType<typeof rootReducers>;
