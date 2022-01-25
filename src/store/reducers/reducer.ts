import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "teste",
};
const reducerSlice = createSlice({
  name: "reducer",
  initialState,
  reducers: {},
});

export default reducerSlice.reducer;
