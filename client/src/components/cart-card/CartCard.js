import React from "react";
import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/action/cartActions";

const CartCard = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart__card flex flex__ai_c flex__jc_sb">
      <div className="cart__card_primary flex">
        <h3>{item.name}</h3>
        <p className="cart__card_primary_price">$ {item.price}</p>
        <div className="cart__card_option flex flex__ai_c">
          <select
            value={item.qty}
            onChange={(e) =>
              dispatch(addItemToCart(item.product, Number(e.target.value)))
            }
          >
            {[...Array(item.countInStock).keys()].map((index) => {
              return (
                <option value={index + 1} key={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
          <i className="fas fa-trash-alt"></i>
        </div>
      </div>
      <div
        className="cart__card_secondary"
        style={{ backgroundImage: `url(${item.image})` }}
      ></div>
    </div>
  );
};

export default CartCard;
