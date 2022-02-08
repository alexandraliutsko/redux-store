import React from "react";

import "./app.css";
import {NavLink, Route, Routes} from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cart/" element={<CartPage />} />
      </Routes>
    </div>
  );
}

export default App;
