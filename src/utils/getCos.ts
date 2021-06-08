import { basePath } from './constants';

/** Get Cosine */
const getCos = async (value: string) => {
  const data = await fetch(`${basePath}cos/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getCos;
