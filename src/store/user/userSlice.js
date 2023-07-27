import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userOrder: [],
        userTable: {},
    },
    reducers: {
            addTable : (state , action) => {
                state.userTable = action.payload
            },
            deleteTable : (state) => {
                state.userTable = null;
            },
            addOrder : (state , action) => {
                state.userOrder = action.payload
            },
            deleteItemFromOrder : (state , action) => {
                state.userOrder.splice(action.payload, 1);
            }
    }
})

export const { addTable, deleteTable, addOrder } = userSlice.actions

export default userSlice.reducer