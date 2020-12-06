import {AxiosResponse} from "axios";

export const getData = async <T>(responsePromise: Promise<AxiosResponse<T>>): Promise<T> => {
  const { data } = await responsePromise;

  return data;
};