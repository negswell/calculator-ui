import { basePath } from './constants';

const getResult = async (value: string) => {
  const data = await fetch(
    `${basePath}calculate/?value=${encodeURIComponent(value)}`
  );
  const response: IResponse = await data.json();

  return response.result;
};

export default getResult;
