import { basePath } from './constants';

/** Get Square Root */
const getSquareRoot = async (value: string) => {
  const data = await fetch(`${basePath}square-root/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getSquareRoot;
