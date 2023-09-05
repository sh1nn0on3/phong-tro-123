import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {
    test: "test",
  },
  reducers: {
    test: (state) => {
      state.test = "test";
    },
  },
});

export const { test: testAction } = testSlice.actions;

export default testSlice.reducer;
