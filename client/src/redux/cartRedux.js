import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import httpService from "../services/httpService";

const auxillaryUpdateCall = async (cart) => {
  const response = await httpService.put(`carts/${cart.id}`, {
    ...cart,
    products: cart.products.map((p) => ({
      quantity: p.quantity,
      product: p._id,
    })),
  });
  return response;
};

export const cartFetch = createAsyncThunk("cart/cartFetch", async (id) => {
  try {
    const response = await httpService.get(`carts/find/${id}`);
    return response.data;
  } catch (error) {}
});

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    id: "",
    products: [],
    quantity: 0,
    total: 0,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    addToCart(state, action) {
      const existingIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity + 1,
        };
      } else {
        state.quantity += 1;
        state.products.push({ ...action.payload, quantity: 1 });
        state.total += action.payload.price * action.payload.quantity;
      }
      auxillaryUpdateCall(state);
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } else if (state.products[itemIndex].quantity === 1) {
        const nextproducts = state.products.filter(
          (item) => item._id !== action.payload._id
        );
        state.products = nextproducts;
      }
      auxillaryUpdateCall(state);
    },
    removeFromCart(state, action) {
      let idx = state.products.findIndex((p) => p._id === action.payload._id);
      let nArray = [...state.products];
      nArray.splice(idx, 1);
      state.products = nArray;
      state.quantity = nArray.length;
      auxillaryUpdateCall(state);
      return state;
    },
    getTotals(state, action) {
      let { total, quantity } = state.products.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    clearCart(state, action) {
      state.products = [];
      state.quantity = 0;
      state.total = 0;
      state.cartTotalQuantity = 0;
      state.cartTotalAmount = 0;
      auxillaryUpdateCall(state);
    },
  },
  extraReducers: {
    [cartFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [cartFetch.fulfilled]: (state, { type, payload }) => {
      if (payload) {
        state.products = payload.products.map((i) => ({
          quantity: i.quantity,
          ...i.product,
        }));
        state.id = payload._id;
      }
    },
    [cartFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

export const {
  addProduct,
  addToCart,
  clearCart,
  decreaseCart,
  getTotals,
  removeFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
