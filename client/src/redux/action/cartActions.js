import { ADD_TO_CART } from "../constant/cartConstant";

import axios from "axios";

export const addItemToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);

  const addedItem = {
    product: data._id,
    name: data.name,
    image: data.image,
    price: data.price,
    countInStock: data.countInStock,
    qty: qty,
  };

  dispatch({ type: ADD_TO_CART, payload: addedItem });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
