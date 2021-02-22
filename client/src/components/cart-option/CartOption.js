import React from "react";
import { Link } from "react-router-dom";

const CartOption = ({ subTotal }) => {
  return (
    <div className="cart__side">
      <div className="cart__header flex flex__jc_sb flex__ai_c">
        <h2>Total</h2>
      </div>
      <div className="cart__side_group flex flex__jc_sb">
        <h3>Sub-total</h3>
        <p>$ {subTotal}</p>
      </div>
      <div className="cart__side_group flex flex__jc_sb">
        <h3>Delivery</h3>
        <input placeholder="Standard delivery time" />
      </div>
      <div className="cart__side_cta flex flex__jc_c">
        <Link to="/" className="button">
          Check Out
        </Link>
      </div>
    </div>
  );
};

export default CartOption;
