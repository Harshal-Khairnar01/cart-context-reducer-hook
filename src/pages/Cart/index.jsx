import React from "react";
import { useCart } from "../../context/cartContext";
import ProductCard from "../../components/ProductCard";

const Cart = () => {
  const { cartItems } = useCart();
  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="container">
          {cartItems.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
