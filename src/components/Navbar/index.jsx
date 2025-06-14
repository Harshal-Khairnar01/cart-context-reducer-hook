import React from "react";
import { useCart } from "../../context/cartContext";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  const gotoCart = () => {
    navigate("/cart");
  };

  return (
    <div className="navbar">
      <h1>Shopee</h1>
      <h3 className="cart" onClick={gotoCart}>
        <FiShoppingCart size={30} />
        <span className="cart-count">{cartItems.length}</span>
      </h3>
    </div>
  );
};

export default Navbar;
