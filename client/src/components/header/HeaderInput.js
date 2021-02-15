import React from "react";

const HeaderInput = () => {
  return (
    <div className="header__group flex">
      <input
        className="header__input"
        type="text"
        name="filter"
        placeholder="Search product here..."
      />
      <div className="button header__search">
        <a href="#">Search</a>
      </div>
    </div>
  );
};

export default HeaderInput;
