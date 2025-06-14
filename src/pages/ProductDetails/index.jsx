import { useParams } from "react-router-dom";
import { products } from "../../db/products";

const ProductDetails = () => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);
  

  return (
    <div>
      <h1>Product Details</h1>
      {product ? (
        <div>
          <h2>{product.name}</h2>
          <p>Price: {product.newPrice}</p>
          <p>Rating: {product.rating}</p>
          <p>Discount: {product.discount}</p>
          <img src={product.image} alt={product.name} />
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default ProductDetails;
