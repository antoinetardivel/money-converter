import { createSlice } from "@reduxjs/toolkit";
import { CountriesReducer } from "./Countries.model";

const initialState: CountriesReducer = {
  allCountries : [],
  selectedCountry : 'AFN' 
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
    SET_SELECTED_COUNTRY(state, action) {
      return {
        ...state,
        selectedCountry: action.payload,
      };
    },
  },
});

export const { SET_COUNTRIES, SET_SELECTED_COUNTRY } =
  deviseSlice.actions;

export const countriesReducer = deviseSlice.reducer;
