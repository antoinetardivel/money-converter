import { connect } from "react-redux";
import { compose } from "redux";
import { AppState } from "../../store/store";
import SelectCountry, { IExternaProps, IReduxSelectCountry } from "./SelectCountry.component";

const mapStateToProps = (store: AppState): IReduxSelectCountry => ({
  allCountries: store.countriesReducer.allCountries
});

const enhance = compose<any>(connect(mapStateToProps));
export default enhance(SelectCountry) as React.FC<IExternaProps>