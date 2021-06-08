import { basePath } from './constants';

const getE = async (value: string) => {
  const data = await fetch(`${basePath}e/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getE;
