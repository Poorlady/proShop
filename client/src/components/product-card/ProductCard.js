import React from "react";
import Rating from "../rating/ProductRating";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/products/${product._id}`} className="product flex flex__dc">
      <div className="product__primary flex flex__dc">
        <h3 className="product__title">{product.name}</h3>
        <p className="product__price">${product.price}</p>
        <Rating rates={product.rating} reviews={product.numReviews} />
      </div>
      <div
        className="product__secondary"
        style={{ backgroundImage: `url(${product.image})` }}
      ></div>
    </Link>
  );
};

export default ProductCard;
