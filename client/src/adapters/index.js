import Axios from "axios";

const axiosInit = () => {
  return new Axios.create();
};

export const getData = async (url) => {
  const axios = axiosInit();
  const { data } = await axios.get(url);
  return data;
};
