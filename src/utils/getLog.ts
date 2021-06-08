import { basePath } from './constants';

/** Get Log */
const getLog = async (value: string) => {
  const data = await fetch(`${basePath}log/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getLog;
