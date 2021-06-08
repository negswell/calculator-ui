import { basePath } from './constants';

const getLn = async (value: string) => {
  const data = await fetch(`${basePath}ln/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getLn;
