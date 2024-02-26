import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface PopupState {
    open?: boolean
    text: string
    type: 'error' | 'success'
}

export const initialState: PopupState = {
    open: false,
    text: '',
    type: 'error',
}
export const PopupSlice = createSlice({
    name: 'alerter',
    initialState,
    reducers: {
        open: (state, action: PayloadAction<PopupState>) => {
            state.open = true
            state.text = action.payload.text
            state.type = action.payload.type
        },
        close: (state) => {
            state.open = false
            state.text = ''
        },
    },
})

export const { open, close } = PopupSlice.actions

export default PopupSlice.reducer
