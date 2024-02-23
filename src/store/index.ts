import { configureStore } from '@reduxjs/toolkit'
import UserInfoReducer from '../reducer/UserSlice'
export const store = configureStore({
    reducer: UserInfoReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
