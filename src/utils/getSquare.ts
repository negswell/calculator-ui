import { basePath } from './constants';

const getSquare = async (value: string) => {
  const data = await fetch(`${basePath}square/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getSquare;
