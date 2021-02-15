import React from "react";

const ProductOption = ({ stock }) => {
  return (
    <div className="detail__option">
      <div className="detail__option_group flex">
        <label htmlFor="stock">Status:</label>
        <input
          name="stock"
          type="text"
          readOnly={true}
          value={stock > 0 ? "In Stock" : "Out of stock"}
        />
      </div>
      <div className="detail__option_group flex">
        <label htmlFor="stock">Stock:</label>
        <input
          className="detail__amount"
          name="amount"
          type="number"
          defaultValue="1"
          min="1"
          max={stock}
        />
      </div>
      <div className="detail__option_group flex">
        <button className="button">Add Cart</button>
      </div>
    </div>
  );
};

export default ProductOption;
