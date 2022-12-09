import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
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
        (item) => item.id === action.payload.id
      );

      if (existingIndex >= 0) {
        state.products[existingIndex] = {
          ...state.products[existingIndex],
          quantity: state.products[existingIndex].quantity + 1,
        };

      } else {
        state.quantity += 1;
        state.products.push(action.payload);
        state.total += action.payload.price * action.payload.quantity;
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.products[itemIndex].quantity > 1) {
        state.products[itemIndex].quantity -= 1;
      } else if (state.products[itemIndex].quantity === 1) {
        const nextproducts = state.products.filter(
          (item) => item.id !== action.payload.id
        );
        state.products = nextproducts;
      }
    },
    removeFromCart(state, action) {
      let idx = state.products.findIndex(p => p.id === action.payload.id)
      let nArray = [...state.products]
      nArray.splice(idx, 1)
      state.products = nArray;
      state.quantity = nArray.length
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
      state.quantity = 0
      state.total = 0
      state.cartTotalQuantity = 0
      state.cartTotalAmount = 0
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
