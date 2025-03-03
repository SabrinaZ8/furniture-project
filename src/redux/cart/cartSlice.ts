import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartProductType } from "../../types/types";

type CartState = {
  items: CartProductType[];
  totalAmount: number;
};

const loadCartFromLocalStorage = (): CartState => {
  const cartData = localStorage.getItem("cartProductsLocal");
  return cartData ? JSON.parse(cartData) : { items: [], totalAmount: 0 };
};

const initialState: CartState = loadCartFromLocalStorage();
const saveCartToLocalStorage = (cart: CartState) => {
  localStorage.setItem("cartProductsLocal", JSON.stringify(cart));
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

        saveCartToLocalStorage(state);
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
        saveCartToLocalStorage(state);
      }
    },

    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
      saveCartToLocalStorage(state);
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
        saveCartToLocalStorage(state);
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
