import "./App.css";

import React from "react";
import { Routes, Route } from "react-router-dom";

import { useCart } from "./context/cartContext";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";

const App = () => {

    const { cartItems } = useCart();
    console.log(cartItems)

  return (
   <Routes>
     <Route path="/" element={<Product />} />
     <Route path="/cart" element={<Cart />} />
     <Route path="/product-details/:productId" element={<ProductDetails />} />
   </Routes>
  );
};

export default App;
