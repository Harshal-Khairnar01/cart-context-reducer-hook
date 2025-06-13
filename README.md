# Cart Management with useContext & useReducer

This project demonstrates a simple e-commerce cart system built with React, using the `useContext` and `useReducer` hooks for state management. It showcases how to manage global state (the cart) efficiently without prop drilling, making the codebase scalable and maintainable.

## How It Works

- **Product Listing:**  
  The app displays a list of products. Each product can be added to or removed from the cart.

- **Cart State Management:**  
  The cart state (`cartItems`) and dispatch function (`cartDispatch`) are managed globally using React Context (`cartContext.jsx`) and a reducer (`cartReducer.js`).  
  - `ADD_TO_CART` adds a product to the cart.
  - `REMOVE_FROM_CART` removes a product from the cart.
  - `CLEAR_CART` empties the cart.

- **Components:**
  - [`Navbar`](src/components/Navbar/index.jsx): Shows the cart count.
  - [`Products`](src/components/Products/index.jsx): Displays product details and provides buttons to add/remove items from the cart.
  - [`App`](src/App.jsx): Main component that renders the product list and navbar.

- **Context Provider:**  
  The `CartProvider` wraps the app, making cart state and dispatch available to all components via the `useCart` hook.

## Benefits

- **No Prop Drilling:**  
  Cart state and actions are accessible anywhere in the component tree without passing props through multiple layers.

- **Centralized State Management:**  
  All cart logic is handled in one place (the reducer), making updates predictable and debugging easier.

- **Scalability:**  
  Adding new cart actions or features is straightforward by extending the reducer and context.

- **Separation of Concerns:**  
  UI components focus on rendering, while state logic is managed separately.

## File Structure

- `src/context/cartContext.jsx` — Sets up the cart context and provider.
- `src/reducers/cartReducer.js` — Contains the reducer logic for cart actions.
- `src/components/Navbar/index.jsx` — Navbar with cart count.
- `src/components/Products/index.jsx` — Product card with add/remove buttons.
- `src/db/products.js` — Sample product data.
- `src/App.jsx` — Main app component.

## Getting Started

1. **Install dependencies:**  
   Run `npm install` in the project directory.

2. **Start the app:**  
   Run `npm run dev` to launch the development server.

---

This project is a great starting point for learning scalable state management in React using Context and Reducer patterns.