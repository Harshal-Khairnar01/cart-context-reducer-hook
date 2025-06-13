
import React from 'react'
import { useCart } from '../../context/cartContext'

const Navbar = () => {
    const { cartItems } = useCart();
  return (
    <div className='navbar'>
      <h1>Shopee</h1>
      <h3>Cart Count - {cartItems.length}</h3>
    </div>
  )
}

export default Navbar
