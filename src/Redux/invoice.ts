import { createSlice } from "@reduxjs/toolkit";

const invoiceSlice = createSlice({
  name: "Invoice",
  initialState: {
    them: "light",
    items: [],
    upDate: false,
    currentItem: {},
  },
  reducers: {
    addToTheme: (state, { payload }) => {
      state.them = payload;
    },
    addToItem: (state, { payload }) => {
      state.items = payload;
    },
    changeUpdate: (status, { payload }) => {
      status.upDate = payload;
    },
    addCurrentItem: (status, { payload }) => {
      status.currentItem = payload;
    },
  },
});

export const { addToTheme, addToItem, addCurrentItem, changeUpdate } =
  invoiceSlice.actions;

export default invoiceSlice.reducer;
