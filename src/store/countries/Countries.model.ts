export interface CountriesReducer {
  allCountries: Country[],
  selectedCountryIn: string,
  symbolIn: string,
  selectedCountryOut: string,
  symbolOut: string,
}

export interface Country {
  alpha3: string,
  currencyId: string,
  currencyName: string,
  currencySymbol: string,
  id: string,
  name: string
}
