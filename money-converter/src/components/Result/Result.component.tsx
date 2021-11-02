export interface IReduxResult {
  amountOut: number,
  symbolOut: string
}

export interface IExternaProps {}

interface Tprops extends IReduxResult, IExternaProps {}

const Result: React.FC<Tprops> = ({ amountOut, symbolOut }) => {
  return <p>Résultat : {amountOut} {symbolOut}</p>;
};

export default Result;
