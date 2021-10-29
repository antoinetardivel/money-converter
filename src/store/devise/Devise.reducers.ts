import { createSlice } from "@reduxjs/toolkit";
import { DeviseReducer } from "./Devise.model";

const initialState: DeviseReducer = {
  amountIn: 0,
  amountOut: 0,
  deviseOut: "USD",
};

export const deviseSlice = createSlice({
  name: "deviseReducer",
  initialState,
  reducers: {
    SET_AMOUNT_IN(state, action) {
      return {
        ...state,
        amountIn: action.payload,
      };
    },
    SET_AMOUNT_OUT(state, action) {
      return {
        ...state,
        amountOut: action.payload,
      };
    },
    SET_DEVISE_OUT(state, action) {
      return {
        ...state,
        deviseOut: action.payload,
      };
    },
  },
});

export const { SET_AMOUNT_IN, SET_AMOUNT_OUT, SET_DEVISE_OUT } =
  deviseSlice.actions;

export const deviseReducer = deviseSlice.reducer;
