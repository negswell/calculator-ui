import { basePath } from './constants';

const getCos = async (value: string) => {
  const data = await fetch(`${basePath}cos/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getCos;
