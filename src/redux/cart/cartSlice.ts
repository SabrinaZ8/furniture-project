import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType } from "../../types/types";

type CartState = {
  items: CartProductType[];
  totalAmount: number;
};

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<CartProductType>) {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }

      state.totalAmount += action.payload.discountedPrice
        ? action.payload.discountedPrice * action.payload.quantity
        : action.payload.price * action.payload.quantity;
    },

    removeFromCart(state, action: PayloadAction<number>) {
      const itemToRemove = state.items.find(
        (item) => item.id === action.payload
      );

      if (itemToRemove) {
        state.totalAmount -= itemToRemove.discountedPrice
          ? itemToRemove.discountedPrice * itemToRemove.quantity
          : itemToRemove.price * itemToRemove.quantity;
        state.items = state.items.filter((item) => item.id !== action.payload);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem && quantity > 0) {
        const oldQuantity = existingItem.quantity;
        existingItem.quantity = quantity;

        state.totalAmount +=
          (existingItem.discountedPrice
            ? existingItem.discountedPrice
            : existingItem.price) *
          (quantity - oldQuantity);

      } else if (existingItem && quantity === 0) {
        state.totalAmount -= existingItem.discountedPrice

          ? existingItem.discountedPrice * existingItem.quantity
          : existingItem.price * existingItem.quantity;

        state.items = state.items.filter((item) => item.id !== id);
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
