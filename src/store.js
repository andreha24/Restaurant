import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './store/cart/slice';
import userReducer from './store/user/userSlice'

export default configureStore({
    reducer: {
        cartReducer,
        userReducer
    }
})