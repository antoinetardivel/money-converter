export interface CountriesReducer {
  allCountries: Country[],
  selectedCountryIn: string,
  selectedCountryOut: string
}

export interface Country {
  alpha3: string,
  currencyId: string,
  currencyName: string,
  currencySymbol: string,
  id: string,
  name: string
}
