import { configureStore } from "@reduxjs/toolkit";
import colorsSlice from "./colorsSlice";
import homeSlice from "./homeSlice";

const store = configureStore({
  reducer: {
    colorsSlice: colorsSlice,
    homeSlice: homeSlice,
  },
});

export default store;
