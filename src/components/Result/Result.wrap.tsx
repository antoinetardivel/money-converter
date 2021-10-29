import { connect } from "react-redux";
import { compose } from "redux";
import { AppState } from "../../store/store";
import Result, { IExternaProps, IReduxResult } from "./Result.component";

const mapStateToProps = (store: AppState): IReduxResult => ({
  amountOut: store.deviseReducer.amountOut,
});
const enhance = compose<any>(connect(mapStateToProps));
export default enhance(Result) as React.FC<IExternaProps>