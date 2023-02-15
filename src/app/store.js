import { configureStore } from "@reduxjs/toolkit";
import CardSlice from "../features/CardSlice";

export const store = configureStore({
  reducer: {
    counter: CardSlice,
  },
});
