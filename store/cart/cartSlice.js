import { createSlice } from "@reduxjs/toolkit";
import cartProducts from "../../src/data/cartProducts.json";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: cartProducts,
  },
  reducers: {
    onAddProduct: (state, { payload }) => {
      state.products.push(payload);
    },
    onAddQuantity: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id === payload.id) {
          return { ...payload, quantity: product.quantity + 1 };
        } else {
          return product;
        }
      });
    },
    onRemoveQuantity: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id === payload.id) {
          if (product.quantity === 1) {
            return product;
          } else {
            return { ...payload, quantity: product.quantity - 1 };
          }
        } else {
          return product;
        }
      });
    },
    onDeleteItem: (state, { payload }) => {
      state.products = state.products.filter(
        (product) => product.id !== payload.id
      );
    },
    onCheckItem: (state, { payload }) => {
      state.products = state.products.map((product) => {
        if (product.id === payload.id) {
          return { ...payload, checked: !product.checked };
        } else {
          return product;
        }
      });
    },
    onCheckAllItems: (state) => {
      state.products = state.products.map((product) => {
        const checkedProducts = state.products.filter(
          (product) => product.checked
        );
        if (checkedProducts.length === state.products.length) {
          return { ...product, checked: false };
          return product;
        } else {
          return { ...product, checked: true };
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  onAddProduct,
  onAddQuantity,
  onRemoveQuantity,
  onDeleteItem,
  onCheckItem,
  onCheckAllItems,
} = cartSlice.actions;
