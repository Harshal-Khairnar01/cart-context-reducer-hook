import React from 'react'
import Navbar from '../../components/Navbar'
import { products } from '../../db/products'
import ProductCard from '../../components/ProductCard'

function Product() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="head">Products</h1>
      <div className="container">
        {products.length > 0 &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  )
}

export default Product
