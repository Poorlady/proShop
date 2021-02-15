import React from "react";

const SliderCard = ({ product }) => {
  return (
    <div className="slider__card flex flex__jc_sb">
      <div className="slider__primary flex flex__dc flex__jc_c">
        <p className="slider__title">{product.title}</p>
        <p className="slider__price">${product.price}</p>
      </div>
      <div
        className="slider__secondary"
        style={{ backgroundImage: `url(${product.image})` }}
      >
        {/* <img src={product.image} alt={product.title} /> */}
      </div>
    </div>
  );
};

export default SliderCard;
