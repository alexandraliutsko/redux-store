import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/home-page";
import CartPage from "../pages/cart-page";
import ShopHeader from "../shop-header/shop-header";

import "./app.css";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={200} />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/cart/" element={<CartPage />} />
      </Routes>
    </main>
  );
}

export default App;
