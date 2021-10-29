import { configureStore } from "@reduxjs/toolkit";
import { rootReducers } from "./reducers";

const store = configureStore({
  reducer: rootReducers,
});

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
