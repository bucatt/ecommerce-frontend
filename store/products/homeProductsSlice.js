import { createSlice } from "@reduxjs/toolkit";

export const homeProductsSlice = createSlice({
  name: "homeProducts",
  initialState: {
    homeCategories: [
      {
        categoryName: "Phones",
        products: [
          {
            id: "1",
            productTitle: "Product title",
            description: "Product description",
            img: "https://vtex.com/wp-content/uploads/2020/11/motorola-case-study-cover.jpg",
          },
          {
            id: "2",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://vtex.com/wp-content/uploads/2020/11/motorola-case-study-cover.jpg",
          },
          {
            id: "3",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://vtex.com/wp-content/uploads/2020/11/motorola-case-study-cover.jpg",
          },
          {
            id: "4",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://vtex.com/wp-content/uploads/2020/11/motorola-case-study-cover.jpg",
          },
        ],
      },
      {
        categoryName: "Video",
        products: [
          {
            id: "5",
            productTitle: "Product title",
            description: "Product description",
            img: "https://vtex.com/wp-content/uploads/2020/11/motorola-case-study-cover.jpg",
          },
          {
            id: "6",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20637108_3-p9yk5rqi.jpg",
          },
          {
            id: "7",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20637108_3-p9yk5rqi.jpg",
          },
          {
            id: "8",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://7483c243aa9da28f329c-903e05bc00667eb97d832a11f670edad.ssl.cf1.rackcdn.com/20637108_3-p9yk5rqi.jpg",
          },
        ],
      },
      {
        categoryName: "Audio",
        products: [
          {
            id: "9",
            productTitle: "Product title",
            description: "Product description",
            img: "https://www.ebest.cl/media/catalog/product/cache/336bfee9e59a64103d1f594806f63945/m/p/mpow-h12-1.jpg",
          },
          {
            id: "10",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://www.ebest.cl/media/catalog/product/cache/336bfee9e59a64103d1f594806f63945/m/p/mpow-h12-1.jpg",
          },
          {
            id: "11",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://www.ebest.cl/media/catalog/product/cache/336bfee9e59a64103d1f594806f63945/m/p/mpow-h12-1.jpg",
          },
          {
            id: "12",
            productTitle: "Product title2",
            description: "Product description2",
            img: "https://www.ebest.cl/media/catalog/product/cache/336bfee9e59a64103d1f594806f63945/m/p/mpow-h12-1.jpg",
          },
        ],
      },
    ],
  },

  reducers: {
    onAddProduct: (state, { payload }) => {
      //   state.products.push(payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { onAddProduct } = homeProductsSlice.actions;
