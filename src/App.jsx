import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import { products } from "./db/products";
import Products from "./components/Products";
import { useCart } from "./context/cartContext";

const App = () => {

    const { cartItems } = useCart();
    console.log(cartItems)

  return (
    <div className="App">
      <Navbar />
      <h1 className="head">Products</h1>
      <div className="container">
        {products.length > 0 &&
          products.map((product) => (
            <Products key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default App;
