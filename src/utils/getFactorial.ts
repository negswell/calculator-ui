import { basePath } from './constants';

const getFactorial = async (value: string) => {
  const data = await fetch(`${basePath}factorial/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getFactorial;
