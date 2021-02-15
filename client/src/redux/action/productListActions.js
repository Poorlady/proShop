import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILED,
} from "../constant/productContasnt";

import axios from "axios";

export const productListAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get("api/products/");

    dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
  } catch (err) {
    console.log(err.response, err.response.data);
    dispatch({
      type: PRODUCT_LIST_FAILED,
      payload:
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message,
    });
  }
};
