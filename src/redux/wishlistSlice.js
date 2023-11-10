import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.items.push(action.payload);
    },

    removeFromWishlist: (state, action) => {
      state.items.splice(action.payload, 1);
    },

    increaseQuantity: (state, action) => {
      state.items[action.payload].quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      const item = state.items[action.payload];
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  increaseQuantity,
  decreaseQuantity,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
