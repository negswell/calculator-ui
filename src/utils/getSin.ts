import { basePath } from './constants';

/** Get Sin */
const getSin = async (value: string) => {
  const data = await fetch(`${basePath}sin/?value=${value}`);
  const response: IResponse = await data.json();

  return response.result;
};

export default getSin;
