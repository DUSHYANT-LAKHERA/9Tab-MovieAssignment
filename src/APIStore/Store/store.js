import { configureStore, } from '@reduxjs/toolkit'
import authSlice from '../Features/auth/authSlice'

const store = configureStore({
    reducer: {
        auth: authSlice,
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares({
        serializableCheck: false
    })
})

export default store