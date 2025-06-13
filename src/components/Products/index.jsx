import React from "react";
import { useCart } from "../../context/cartContext";

const Products = ({ product }) => {
  const { cartDispatch } = useCart();

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
    })
  }

  return (
    <div className="product">
      <div>
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

export default Products;
