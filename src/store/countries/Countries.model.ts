export interface CountriesReducer {
  allCountries: Country[],
  selectedCountry: string
}

export interface Country {
  alpha3: string,
  currencyId: string,
  currencyName: string,
  currencySymbol: string,
  id: string,
  name: string
}
