import { basePath } from './constants';

/** Get % */
const getPercentage = async (value: string) => {
  const data = await fetch(`${basePath}percentage/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getPercentage;
