import { basePath } from './constants';

const getSquareRoot = async (value: string) => {
  const data = await fetch(`${basePath}square-root/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getSquareRoot;
