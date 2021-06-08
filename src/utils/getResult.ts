import { basePath } from './constants';

/** Get eval of the result string */
const getResult = async (value: string) => {
  const data = await fetch(
    `${basePath}calculate/?value=${encodeURIComponent(value)}`
  );
  const response: IResponse = await data.json();

  return response.result;
};

export default getResult;
