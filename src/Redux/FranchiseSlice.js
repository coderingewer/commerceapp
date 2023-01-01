import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const ApplyAsync = createAsyncThunk(
  "franchise/aplly/",
  async (data) => {
    const res = await axios.post(
      `${process.env.REACT_APP_REQUEST_DOMAIN}/dealer/add`,
      data
    );
    return res.data;
  }
);
export const LoginAsync = createAsyncThunk(
    "franchise/login/",
    async (data) => {
      const res = await axios.post(
        `${process.env.REACT_APP_REQUEST_DOMAIN}/dealer/login`,
        data
      );
      return res.data;
    }
  );
const FranchiseSlice = createSlice({
  name: "franchise",
  initialState: {
    success : false
  },
  reducers: {
    resetResult : (state, action) =>{
      state.uplaoded = false;
      state.success = false
    }

  },
  extraReducers: {
    [LoginAsync.pending]: (state, action) => {
    },

    [LoginAsync.fulfilled]: (state, action) => {
        localStorage.setItem("token", action.payload.token)
        state.success = true
        localStorage.setItem("franchiselogined", true)
    },
    [ApplyAsync.fulfilled]: (state, action) => {
      state.success = true
    }
  },
});
export const {resetResult} =  FranchiseSlice.actions
export default FranchiseSlice.reducer;
