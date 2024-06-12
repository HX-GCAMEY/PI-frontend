import axios from "axios";

export const getData = async <T>(url: string): Promise<T> => {
  const response = await axios.get(url);
  return response.data;
};

export const postData = async <T, S>(url: string, data: S): Promise<T> => {
  const response = await axios.post(url, data);
  return response.data;
};
