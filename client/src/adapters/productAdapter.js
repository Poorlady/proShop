import { getData } from "./";

export const getProducts = async (url) => {
  const products = await getData(url);
  return products;
};
