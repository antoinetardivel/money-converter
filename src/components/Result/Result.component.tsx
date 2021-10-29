export interface IReduxResult {
  amountOut: number;
}

export interface IExternaProps {}

interface Tprops extends IReduxResult, IExternaProps {}

const Result: React.FC<Tprops> = ({ amountOut }) => {
  return <div>{amountOut}</div>;
};

export default Result;
