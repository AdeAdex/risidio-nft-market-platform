// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   items: [],
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       state.items.push(action.payload);
//     },
//     removeFromWishlist: (state, action) => {
//       state.items = state.items.filter((item) => item.id !== action.payload.id);
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist, updateWishlistQuantity } = wishlistSlice.actions;
// export default wishlistSlice.reducer;













import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const wishlistSlice = createSlice({
  name: 'wishlist',
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

export const { addToWishlist, removeFromWishlist, increaseQuantity, decreaseQuantity } = wishlistSlice.actions;
export default wishlistSlice.reducer;



























// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   // items: [],
//   items: {},
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       const { id } = action.payload;
//       const existingItem = state.items.find((item) => item.id === id);

//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         state.items.push({ ...action.payload, quantity: 1 });
//       }
//     },
//     removeFromWishlist: (state, action) => {
//       const { id } = action.payload;
//       state.items = state.items.filter((item) => item.id !== id);
//     },
//     updateWishlistQuantity: (state, action) => {
//       const { id, quantity } = action.payload;
//       const item = state.items.find((item) => item.id === id);

//       if (item) {
//         item.quantity = quantity;
//       }
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist, updateWishlistQuantity } = wishlistSlice.actions;
// export default wishlistSlice.reducer;
