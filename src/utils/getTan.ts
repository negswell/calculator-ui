import { basePath } from './constants';

const getTan = async (value: string) => {
  const data = await fetch(`${basePath}sin/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getTan;
