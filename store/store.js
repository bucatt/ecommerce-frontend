import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./cart/cartSlice";
import { homeProductsSlice } from "./products/homeProductsSlice";
import { uiSlice } from "./ui/uiSlice";

export const store = configureStore({
  reducer: {
    ui: uiSlice.reducer,
    cart: cartSlice.reducer,
    homeProducts: homeProductsSlice.reducer,
  },
});
