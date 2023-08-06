import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userOrder: [],
    userTable: {},
  },
  reducers: {
    addTable: (state, action) => {
      state.userTable = action.payload;
    },
    addOrder: (state, action) => {
      state.userOrder = action.payload;
    },
  },
});

export const { addTable, addOrder } = userSlice.actions;

export default userSlice.reducer;
