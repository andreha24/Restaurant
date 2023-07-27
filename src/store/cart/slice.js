import { createSlice, original  } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        add: (state, action) => {
            const isPresent = original(state).items.find(({ title }) => title === action.payload.title);

            if (isPresent) {
                state.items = original(state).items.map(item => {
                    if (item.title === action.payload.title) {
                        return {
                            ...item,
                            count_of_dishes: item.count_of_dishes + action.payload.count_of_dishes,
                        }
                    }

                    return item;
                })

                return;
            }

            state.items.push(action.payload);
        },
        deleteItem: (state, action) => {
            state.items.splice(action.payload, 1);
        }
    }
})

export const { add, deleteItem } = cartSlice.actions

export default cartSlice.reducer