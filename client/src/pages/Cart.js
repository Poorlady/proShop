import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/action/cartActions";
import { Header, Footer, CartCard, CartOption } from "../components";

const Cart = ({ match, location, history }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const id = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const subTotal = cartItems.reduce(
    (prev, current) => current.price * Number(current.qty) + prev,
    0
  );

  useEffect(() => {
    if (id) {
      dispatch(addItemToCart(id, qty));
    }
  }, [dispatch, qty, id]);

  return (
    <>
      <Header />
      <div className="container cart">
        <div className="cart__list">
          <div className="cart__header flex flex__jc_sb flex__ai_c">
            <h2>My Cart</h2>
            <p>{cartItems.length} item(s)</p>
          </div>
          {cartItems.length > 0 ? (
            cartItems.map((item) => <CartCard item={item} key={item.product} />)
          ) : (
            <p>Your cart is empty</p>
          )}
          <p className="cart__total">
            Sub-total:<span>$ {subTotal.toFixed(2)}</span>
          </p>
        </div>
        <CartOption subTotal={subTotal.toFixed(2)} />
      </div>
      <Footer />
    </>
  );
};

export default Cart;
