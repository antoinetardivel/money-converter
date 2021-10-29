import { useRef } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Result from "./components/Result";
import { setData } from "./store/devise/Devise.action";

function App() {
  const inputRef =  useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()

  return (
    <div className="App">
      <label htmlFor="amountIn"> Valeur en Euro  </label>
      <input type="number" name="amountIn" id="amountIn" ref={inputRef} />
      <br />
      <label htmlFor="deviseOut">Devise de convertion: </label>
      <select name="deviseOut">
        <option value="EUR">Euro</option>
      </select>
      <br />
      <button onClick={() => {
        if (inputRef.current) {
          dispatch(setData(parseInt(inputRef.current.value)))
        }
      }}> Convertire </button>

      <Result />
    </div>
  );
}
export default App;
