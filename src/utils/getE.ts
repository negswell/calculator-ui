import { basePath } from './constants';

/** Get E */
const getE = async (value: string) => {
  const data = await fetch(`${basePath}e/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getE;
