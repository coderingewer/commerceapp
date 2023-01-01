import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getAllAsync = createAsyncThunk(
  "product/getAll/",
  async () => {
    const res = await axios.get(
      `${process.env.REACT_APP_REQUEST_DOMAIN}/product/getall`,
    );
    return res.data;
  }
);
const ProductSlice = createSlice({
  name: "product",
  initialState: {
    items:[]
  },
  reducers: {
    resetResult : (state, action) =>{
      state.uplaoded = false;
      state.success = false
    }

  },
  extraReducers: {
    [getAllAsync.pending]: (state, action) => {
    },

    [getAllAsync.fulfilled]: (state, action) => {
     state.items= action.payload
    },
    [getAllAsync.rejected]: (state, action) => {

    }
  },
});
export const {resetResult} =  ProductSlice.actions
export default ProductSlice.reducer;
