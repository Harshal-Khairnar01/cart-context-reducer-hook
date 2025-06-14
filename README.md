# Shopping Cart with React Context & useReducer

A simple shopping cart implementation showing state management with Context API and useReducer in React.

## 💡 Core Features

### Product Management
- Product listing with details
- Individual product pages
- Product navigation
- Dynamic cart operations

### Cart Features
- Add/Remove items 
- Cart count display
- Cart items persistence
- Empty cart state handling

## 📁 Project Overview

### State Management
Using Context API for global cart state:

```jsx
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const [{ cartItems }, cartDispatch] = useReducer(cartReducer, {
    cartItems: []
  });
  // ...
};
```

### Components Structure

- **ProductCard**: Displays product with add/remove cart actions
- **Navbar**: Shows cart count and navigation
- **Product**: Lists all available products
- **ProductDetails**: Shows detailed product information
- **Cart**: Displays cart items

### Cart Operations

```jsx
// Add to cart
cartDispatch({
  type: "ADD_TO_CART",
  payload: product
});

// Remove from cart
cartDispatch({
  type: "REMOVE_FROM_CART",
  payload: product
});
```

## 🔧 Implementation Details

### Cart Context Usage
```jsx
const { cartItems, cartDispatch } = useCart();
```

### Product Display
```jsx
<div className="product">
  <h3>{product.name}</h3>
  <p>Price: {product.newPrice}</p>
  <p>Rating: {product.rating}</p>
  <button onClick={onAddToCartClick}>Add to Cart</button>
</div>
```

### Cart State Flow
1. User clicks add/remove button
2. Action dispatched to reducer
3. Cart state updates
4. UI reflects changes
5. Cart count updates in navbar

## 🎯 Key Concepts

1. **Context API**: Global state management
2. **useReducer**: Complex state logic
3. **Component Composition**: Reusable UI elements
4. **State Management Pattern**: Centralized cart operations