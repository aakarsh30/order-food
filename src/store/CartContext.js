import React, { Children, createContext, useReducer } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

function cartReducer(state, action) {
  if (action.type === "ADD") {
    const repeatItem = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const updatedItems = [...state.items];
    if (repeatItem > -1) {
      const item = state.items[repeatItem];
      const updateItem = {
        ...item,
        quantity: item.quantity + 1,
      };
      updatedItems[repeatItem] = updateItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === "DEL") {
    const index = state.items.findIndex((item) => item.id === action.id);
    const item = state.items[index];
    const updatedItems = [...state.items];
    if (item.quantity > 1) {
      const updateItem = {
        ...item,
        quantity: item.quantity - 1,
      };
      updatedItems[index] = updateItem;
    } else {
      updatedItems.splice(index, 1);
    }
    return { ...state, items: updatedItems };
  }
}

export function CartContextProvider({ children }) {
  const [cart, dispatchAction] = useReducer(cartReducer, { items: [] });
  function addItem(item) {
    dispatchAction({ type: "ADD", item });
  }
  function removeItem(id) {
    dispatchAction({ type: "DEL", id });
  }
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export default CartContext;
