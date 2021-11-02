import { getCountries } from "../../service/converter"
import { AppDispatch } from "../store"
import { SET_COUNTRIES } from "./Countries.reducers"

export const initCountries = () => {
  return async ( dispatch : AppDispatch , getState : any) => {
    const allCountries = await getCountries()
    dispatch(SET_COUNTRIES(allCountries))

  }
}