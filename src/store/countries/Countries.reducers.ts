import { createSlice } from "@reduxjs/toolkit";
import { CountriesReducer } from "./Countries.model";

const initialState: CountriesReducer = {
  allCountries : [],
  selectedCountryIn : 'AFN',
  symbolIn: '؋',
  selectedCountryOut : 'AFN',
  symbolOut: '؋'
};

export const deviseSlice = createSlice({
  name: "CountriesReducer",
  initialState,
  reducers: {
    SET_COUNTRIES(state, action) {
      return {
        ...state,
        allCountries: action.payload,
      };
    },
    SET_SELECTED_COUNTRY_IN(state, action) {
      return {
        ...state,
        selectedCountryIn: action.payload.currentId,
        symbolIn: action.payload.symbol,
      };
    },
    SET_SELECTED_COUNTRY_OUT(state, action) {
      return {
        ...state,
        selectedCountryOut: action.payload.currentId,
        symbolOut: action.payload.symbol,
      };
    },
  },
});

export const { SET_COUNTRIES, SET_SELECTED_COUNTRY_OUT, SET_SELECTED_COUNTRY_IN} =
  deviseSlice.actions;

export const countriesReducer = deviseSlice.reducer;
