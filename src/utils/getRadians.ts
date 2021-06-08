import { basePath } from './constants';

const getRadians = async (value: string) => {
  const data = await fetch(`${basePath}radians/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getRadians;
