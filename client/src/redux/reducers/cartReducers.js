import { ADD_TO_CART } from "../constant/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const addedItem = action.payload;

      const existedItem = state.cartItems.find(
        (x) => x.product === addedItem.product
      );
      if (existedItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) => {
            if (item.product === addedItem.product) {
              return {
                ...addedItem,
              };
            }
            return item;
          }),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, addedItem],
        };
      }
    }
    default:
      return state;
  }
};
