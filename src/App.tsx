import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Result from "./components/Result";
import SelectCountry from "./components/SelectCountry";
import { initCountries } from "./store/countries/Countries.action";
import { SET_SELECTED_COUNTRY_OUT, SET_SELECTED_COUNTRY_IN } from "./store/countries/Countries.reducers";
import { convert } from "./store/devise/Devise.action";

function App() {
  const inputAmountIn =  useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handelCountryInChange = (currentId : string) => {
    // console.log(`IN : ${currentId}`);
    dispatch(SET_SELECTED_COUNTRY_IN(currentId))
  }

  const handelCountryOutChange = (currentId : string) => {
    // console.log(`OUT : ${currentId}`);
    dispatch(SET_SELECTED_COUNTRY_OUT(currentId))
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
      <input type="number" name="amountIn" min='0' id="amountIn" ref={inputAmountIn} />
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
