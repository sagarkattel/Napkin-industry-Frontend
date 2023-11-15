import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ProductProp {
  id: number;
  title: string;
  img_url: string;
  price: number;
  rating: number;
  quantity: number;
}

interface ProductState {
  products: ProductProp[];
}

const initialState: ProductState = {
  products: [],
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const product = action.payload;

      // Check if a product with the same ID already exists in the state.products array
      const existingProductIndex = state.products.findIndex(
        (existingProduct) => existingProduct.id === product.id
      );
      if (existingProductIndex !== -1) {
        console.log("Product Already Exists");
        state.products[existingProductIndex].quantity += 1;
      } else {
        // If no product with the same ID exists, add the product to the array
        state.products.push({ ...product, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const productload = action.payload;
      state.products = state.products.filter(
        (product) => product.id !== productload
      );
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;

export default productSlice.reducer;
