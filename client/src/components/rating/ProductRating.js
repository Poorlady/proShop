import React from "react";

const ProductRating = ({ rates, reviews }) => {
  return (
    <div className="product__rates">
      <span>
        <i
          className={
            rates >= 1
              ? "fas fa-star"
              : rates >= 0.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rates >= 2
              ? "fas fa-star"
              : rates >= 1.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rates >= 3
              ? "fas fa-star"
              : rates >= 2.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rates >= 4
              ? "fas fa-star"
              : rates >= 3.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      <span>
        <i
          className={
            rates >= 5
              ? "fas fa-star"
              : rates >= 4.5
              ? "fas fa-star-half-alt"
              : "far fa-star"
          }
        />
      </span>
      {reviews && <span>{reviews} Reviews</span>}
    </div>
  );
};

export default ProductRating;
