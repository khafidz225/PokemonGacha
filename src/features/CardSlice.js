import { createSlice, current } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "product",
  initialState: {
    cardList: [],
  },
  reducers: {
    addCard: (state, action) => {
      state.cardList.push(action.payload);
    },
  },
});

export const { addCard } = cardSlice.actions;
export default cardSlice.reducer;
