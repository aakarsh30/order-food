import { configureStore, createSlice } from "@reduxjs/toolkit";
import React, { Children, createContext, useReducer } from "react";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem(state, action) {
      const repeatItem = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (repeatItem > -1) {
        const item = state.items[repeatItem];
        item.quantity = item.quantity + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action) {
      const index = state.items.findIndex((item) => item.id === action.payload);
      const item = state.items[index];
      if (item.quantity > 1) {
        item.quantity = item.quantity - 1;
      } else {
        state.items.splice(index, 1);
      }
    },
  },
});

const progressSlice = createSlice({
  name: "progress",
  initialState: { progress: "" },
  reducers: {
    showCart(state) {
      state.progress = "cart";
    },
    hideCart(state) {
      state.progress = "";
    },
    showCheckout(state) {
      state.progress = "checkout";
    },
    hideCheckout(state) {
      state.progress = "";
    },
  },
});

const store = configureStore({
  reducer: { cart: cartSlice.reducer, progress: progressSlice.reducer },
});

export const cartActions = cartSlice.actions;
export const progressActions = progressSlice.actions;
export default store;
