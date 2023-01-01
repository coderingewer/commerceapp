import { configureStore } from "@reduxjs/toolkit";
import FranchiseSlice from "./FranchiseSlice";
import ProductSlice from "./ProductSlice";

export const store = configureStore({
  reducer: {
    franchise: FranchiseSlice,
    product:ProductSlice,
  },
});
