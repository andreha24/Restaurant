import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        userOrder: [],
        userTable: {},
        userInfo: {}
    },
    reducers: {
            addTable : (state , action) => {
                state.userTable = action.payload
            },
            deleteTable : (state) => {
                state.userTable = null;
            },
    }
})

export const { addTable, deleteTable } = userSlice.actions

export default userSlice.reducer