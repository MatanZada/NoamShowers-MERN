import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    removeFromCart(state, action) {
      state.products.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.products.filter(
            (item) => item.id !== cartItem.id
          );

          state.products = nextCartItems;

          toast.error("Product removed from cart", {
            position: "bottom-left",
          });
        }
        localStorage.setItem("products", JSON.stringify(state.products));
        return state;
      });
    },
    clearCart(state, action) {
      state.products = [];
      localStorage.setItem("products", JSON.stringify(state.products));
      toast.error("Cart cleared", { position: "bottom-left" });
    },
  },
});

export const { addProduct, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
