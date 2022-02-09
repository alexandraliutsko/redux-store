import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import "./shop-header.css";

library.add(faShoppingCart);

const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header">
      <Link className="logo text-dark" to="/">ReStore</Link>
      <Link to="/cart/" className="shopping-cart text-dark">
        <FontAwesomeIcon className="cart-icon" icon="fa-solid fa-cart-shopping" />
        {numItems} items (${total})
      </Link>
    </header>
  )
};

export default ShopHeader;
