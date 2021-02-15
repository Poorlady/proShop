import React from "react";
import Card from "./SliderCard";

const Slider = ({ products }) => {
  return (
    <div className="container slider">
      <div className="flex flex__dc">
        {products.map((product) => (
          <Card product={product} />
        ))}
        <div className="slider__btn_group flex flex__jc_c">
          <button></button>
          <button></button>
          <button></button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
