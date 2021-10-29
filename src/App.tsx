import { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Result from "./components/Result";
import SelectCountry from "./components/SelectCountry";
import { initCountries } from "./store/countries/Countries.action";
import { SET_SELECTED_COUNTRY } from "./store/countries/Countries.reducers";
import { convert } from "./store/devise/Devise.action";

function App() {
  const inputAmountIn =  useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  const handelCountryChange = (currentId : string) => {
    dispatch(SET_SELECTED_COUNTRY(currentId))
  }

  useEffect(() => {
    dispatch(initCountries())
  }, [dispatch])

  return (
    <div className="App">
      <label htmlFor="amountIn"> Valeur en Euro  </label>
      <input type="number" name="amountIn" id="amountIn" ref={inputAmountIn} />
      <br />
      <label htmlFor="deviseOut">Devise de convertion: </label>
      <SelectCountry handelChange={handelCountryChange} />
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
