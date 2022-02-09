import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";

import "./shop-header.css";

library.add(faShoppingCart);

const ShopHeader = ({numItems, total}) => {
  return (
    <header className="shop-header">
      <a className="logo text-dark" href="#">ReStore</a>
      <a href="#" className="shopping-cart text-dark">
        <FontAwesomeIcon className="cart-icon" icon="fa-solid fa-cart-shopping" />
        {numItems} items (${total})
      </a>
    </header>
  )
};

export default ShopHeader;
