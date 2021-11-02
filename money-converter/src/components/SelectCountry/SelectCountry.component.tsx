import { useRef } from "react";
import { Country } from "../../store/countries/Countries.model";

export interface IReduxSelectCountry {
  allCountries: Country[];
}

export interface IExternaProps {
  handelChange: (currentId : string ) => void
}

interface Iprops extends IReduxSelectCountry, IExternaProps {}

const SelectCountry: React.FC<Iprops> = ({ allCountries, handelChange }) => {
  
  const selectRef =  useRef<HTMLSelectElement>(null)

  return (
    <select name="" id="" onChange={()=> {
      if (selectRef.current) {
        handelChange(selectRef.current.value)
      }
    }} ref={selectRef}>
      {allCountries?.map((country, i) => {
        return(<option value={country.currencyId} key={i}>{country.currencyName}</option>)
      })}
    </select>
  )
};

export default SelectCountry;
