import { basePath } from './constants';

const getDegree = async (value: string) => {
  const data = await fetch(`${basePath}degree/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getDegree;
