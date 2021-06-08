import { basePath } from './constants';

const getLog = async (value: string) => {
  const data = await fetch(`${basePath}log/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getLog;
