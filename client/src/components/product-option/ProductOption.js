import React from "react";

const ProductOption = ({ qty, handleChange, stock, handleSubmit }) => {
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
        <select value={qty} onChange={handleChange}>
          {[...Array(stock).keys()].map((item) => {
            return (
              <option value={item + 1} key={item + 1}>
                {item + 1}
              </option>
            );
          })}
        </select>
      </div>
      <div className="detail__option_group flex">
        <button
          onClick={handleSubmit}
          className="button"
          disabled={stock > 0 ? false : true}
        >
          {stock > 0 ? "Add to cart" : "Out of stock"}
        </button>
      </div>
    </div>
  );
};

export default ProductOption;
