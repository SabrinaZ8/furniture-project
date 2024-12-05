import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../src/redux/cart/cartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice, // Incluindo o Slice do carrinho
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
