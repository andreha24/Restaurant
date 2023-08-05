import { createSlice, original } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    add: (state, action) => {
      const isPresent = original(state).items.find(({ title }) => title === action.payload.title);

      if (isPresent) {
        // eslint-disable-next-line no-param-reassign
        state.items = original(state).items.map((item) => {
          if (item.title === action.payload.title) {
            return {
              ...item,
              countOfDishes: item.countOfDishes + action.payload.countOfDishes,
            };
          }

          return item;
        });

        return;
      }

      state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    clearItems: (state) => {
      state.items = [];
    },
  },
});

export const { add, deleteItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
