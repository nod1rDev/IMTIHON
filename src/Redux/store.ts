import { configureStore } from "@reduxjs/toolkit";
import invoice from "./invoice";


export const store = configureStore({
  reducer: {
    invoice: invoice,
  },
});
