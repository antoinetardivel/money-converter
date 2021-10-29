import store from "../store/store"

export const getCountries = async () => {
  try {
    let res = await fetch(`https://free.currconv.com/api/v7/countries?apiKey=${process.env.REACT_APP_API_KEY}`)
    if (res.ok) {
      const jsonRes : any = await res.json()  
      if (jsonRes) {
        const formatedRes = Object.values(jsonRes.results)
        return formatedRes
      }
    }
    return null

  } catch (error) {
    console.log(error);
    return null
  }
}

export const getCoef = async () => {
  const deviseOut = store.getState().countriesReducer.selectedCountry
  try {
    let res = await fetch(`https://free.currconv.com/api/v7/convert?q=EUR_${deviseOut}&compact=ultra&apiKey=${process.env.REACT_APP_API_KEY}`)
    if (res.ok) {
      return res.json()
    }
    return null

  } catch (error) {
    console.log(error);
    return null
  }
}