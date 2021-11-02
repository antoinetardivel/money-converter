import { useRef, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Result from "./components/Result";
import SelectCountry from "./components/SelectCountry";
import { initCountries } from "./store/countries/Countries.action";
import { SET_SELECTED_COUNTRY_OUT, SET_SELECTED_COUNTRY_IN } from "./store/countries/Countries.reducers";
import { convert } from "./store/devise/Devise.action";
import store from "./store/store";

function App() {
  const inputAmountIn =  useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const [symbolIn, setSymbolIn] = useState(store.getState().countriesReducer.symbolIn);

  const getSymbol = (currentId : string) => {
    let countryS = ''
    
    store.getState().countriesReducer.allCountries.map((country) => {
      if (country.currencyId === currentId) {
        countryS = country.currencySymbol
      }
      return null
    })
    return countryS
  }

  const handelCountryInChange = (currentId : string) => {
    // console.log(`IN : ${currentId}`);
    const symbol = getSymbol(currentId)
    setSymbolIn(symbol)
    const countryIn = {
      currentId,
      symbol
    }
    dispatch(SET_SELECTED_COUNTRY_IN(countryIn))
  }

  const handelCountryOutChange = (currentId : string) => {
    // console.log(`OUT : ${currentId}`);
    const symbol = getSymbol(currentId)
    const countryOut = {
      currentId,
      symbol
    }
    dispatch(SET_SELECTED_COUNTRY_OUT(countryOut))
  }

  useEffect(() => {
    dispatch(initCountries())
  }, [dispatch])

  return (
    <div className="App">
      <label htmlFor="deviseIn">Devise Initiale : </label>
      <SelectCountry handelChange={handelCountryInChange} />
      <br />
      <label htmlFor="amountIn"> Valeur : </label>
      <input type="number" name="amountIn" min='0' id="amountIn" ref={inputAmountIn} /> {symbolIn}
      <br />
      <label htmlFor="deviseOut">Devise de convertion : </label>
      <SelectCountry handelChange={handelCountryOutChange} />
      <br />
      <button onClick={() => {
        if (inputAmountIn.current) {
          dispatch(convert(parseInt(inputAmountIn.current.value)))
        }
      }}> Convertire </button>

      <Result />
    </div>
  );
}
export default App;
