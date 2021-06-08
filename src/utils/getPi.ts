import { basePath } from './constants';

/** Get Pi */
const getPi = async (value: string) => {
  const data = await fetch(`${basePath}pi/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getPi;
