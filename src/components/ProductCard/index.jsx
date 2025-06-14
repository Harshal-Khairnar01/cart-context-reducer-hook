import React from "react";
import { useCart } from "../../context/cartContext";

import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { cartDispatch } = useCart();

  const navigate = useNavigate();

  const onAddToCartClick = () => {
    cartDispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
  };

  const onRemoveFromCartClick = () => {
    cartDispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });
  };

  const onTitleClick = () => {
    navigate(`/product-details/${product.id}`);
  };

  return (
    <div className="product">
      <div onClick={onTitleClick} style={{ cursor: "pointer" }}>
        <h3>{product.name}</h3>
      </div>
      <div>
        <p>Price: {product.newPrice}</p>
        <p>Rating: {product.rating}</p>
        <p>Discount: {product.discount}</p>
      </div>
      <div>
        <button onClick={onAddToCartClick}>Add to Cart</button>
        <button onClick={onRemoveFromCartClick}>Remove from Cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
