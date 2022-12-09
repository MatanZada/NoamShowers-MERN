import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { publicRequest } from "../requestMethods";

const initialState = {
  items: [],
  categories: [],
  sliderItems: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    try {
      const response = await publicRequest.get("/products");
      return response.data;
    } catch (error) {
      console.log(error)
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, { type, payload }) => {
      const { categories, products, sliderItems } = payload
      state.items = products
      state.categories = categories
      state.sliderItems = sliderItems
      state.status = "success";
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export default productsSlice.reducer;
