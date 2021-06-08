import { basePath } from './constants';

const getPi = async (value: string) => {
  const data = await fetch(`${basePath}pi/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getPi;
