export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case "REMOVE_FROM_CART": {
      const index = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (index === -1) return state;
      return {
        ...state,
        cartItems: [
          ...state.cartItems.slice(0, index),
          ...state.cartItems.slice(index + 1),
        ],
      };
    }
    case "CLEAR_CART":
      return {
        ...state,
        cartItems: [],
      };
    default:
      return state;
  }
};
