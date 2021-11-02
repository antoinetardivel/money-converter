import { createSlice } from "@reduxjs/toolkit";
import { CountriesReducer } from "./Countries.model";

const initialState: CountriesReducer = {
  allCountries : [],
  selectedCountryIn : 'AFN',
  selectedCountryOut : 'AFN' 
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
        selectedCountryIn: action.payload,
      };
    },
    SET_SELECTED_COUNTRY_OUT(state, action) {
      return {
        ...state,
        selectedCountryOut: action.payload,
      };
    },
  },
});

export const { SET_COUNTRIES, SET_SELECTED_COUNTRY_OUT, SET_SELECTED_COUNTRY_IN} =
  deviseSlice.actions;

export const countriesReducer = deviseSlice.reducer;
