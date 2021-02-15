import React from "react";
import Input from "./HeaderInput";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="container container__px flex flex__jc_sb flex__ai_c">
        <Link to="/" className="header__logo">
          ProShop
        </Link>
        <Input />
        <nav>
          <ul className="flex header__nav_list">
            <li className="header__nav_item">
              <a href="#">Cart</a>
            </li>
            <li className="header__nav_item">
              <a href="#">Log In</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
