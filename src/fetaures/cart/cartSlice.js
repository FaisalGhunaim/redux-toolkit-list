import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItem: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItem = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItem = state.cartItem.filter((item) => {
        return item.id !== itemId;
      });
    },
    increase: (state, action) => {
      const itemId = action.payload;
      const faisal = state.cartItem.find((item) => {
        return item.id === itemId;
      });
      faisal.amount = faisal.amount + 1;
    },
    decrease: (state, action) => {
      const itemId = action.payload;
      const faisal = state.cartItem.find((item) => item.id === itemId);
      faisal.amount = faisal.amount - 1;
    },
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItem.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
        state.amount = amount;
        state.total = total;
    },
  },
});
export const { clearCart, removeItem, increase, decrease , calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
