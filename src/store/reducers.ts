import { combineReducers } from "redux";
import { deviseReducer } from "./devise/Devise.reducers";

export const rootReducers = combineReducers({
  deviseReducer,
});

export type AppState = ReturnType<typeof rootReducers>;
