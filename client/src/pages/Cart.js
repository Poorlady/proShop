import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/action/cartActions";

const Cart = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const id = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;

  useEffect(() => {
    if (id) {
      dispatch(addItemToCart(id, qty));
    }
  }, [dispatch, qty, id]);

  return (
    <div>
      <h1>Cart</h1>
    </div>
  );
};

export default Cart;
