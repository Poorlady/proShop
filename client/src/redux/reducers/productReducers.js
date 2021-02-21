import {
  PRODUCT_LIST_FAILED,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_DETAIL_FAILED,
  PRODUCT_DETAIL_REQUEST,
  PRODUCT_DETAIL_SUCCESS,
} from "../constant/productContasnt";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: [...action.payload] };
    case PRODUCT_LIST_FAILED:
      return { loading: false, products: [], error: action.payload };
    default:
      return state;
  }
};

export const productDetailReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_DETAIL_REQUEST:
      return { loading: true, product: {} };
    case PRODUCT_DETAIL_SUCCESS:
      return { loading: false, product: { ...action.payload } };
    case PRODUCT_DETAIL_FAILED:
      return { loading: false, product: {}, error: action.payload };
    default:
      return state;
  }
};
