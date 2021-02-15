import React from "react";
import { Rating } from "../index";

const ProductBanner = ({ product }) => {
  return (
    <div className="detail__banner flex flex__jc_sb">
      <div className="detail__primary">
        <h1 className="detail__title">{product.name}</h1>
        <div className="flex">
          <p className="detail__price">
            Price: <span className="bold">${product.price}</span>
          </p>
          <Rating rates={product.rating} reviews={product.numReviews} />
        </div>
        <p className="detail__desc">{product.description}</p>
      </div>
      <div
        className="detail__secondary"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
    </div>
  );
};

export default ProductBanner;
