import { createSlice } from "@reduxjs/toolkit";
const initialState = {};
const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    storeHome(state, action) {
      return action.payload;
    },
  },
});

export const homeActions = homeSlice.actions;

export default homeSlice.reducer;
