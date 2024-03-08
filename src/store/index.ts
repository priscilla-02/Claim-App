import { configureStore, combineReducers } from '@reduxjs/toolkit'
import UserInfoReducer from './reducer/UserSlice'
import PopupReducer from './reducer/PopupSlice'

const rootReducer = combineReducers({
    userInfo: UserInfoReducer,
    popup: PopupReducer,
})

export const store = configureStore({
    reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
