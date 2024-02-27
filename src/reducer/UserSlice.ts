import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserSubmissionState {
    creditUse: boolean
    bankUsed: string[]
    address: IAddress
    userInfo: IUserinfo
    email: string
    phoneNo: string
}

export interface IUserinfo {
    title: string
    firstName: string
    lastName: string
    maidenName: string
    dob: string
    [key: string]: string
}

export interface IAddress {
    addressLine1: string
    addressLine2: string
    townOrCity: string
    county: string
    country: string
    postcode: string
    [key: string]: string
}

export const initialState: UserSubmissionState = {
    creditUse: false,
    bankUsed: [],
    address: {
        addressLine1: '',
        addressLine2: '',
        townOrCity: '',
        county: '',
        country: '',
        postcode: '',
    },
    userInfo: {
        title: '',
        firstName: '',
        lastName: '',
        maidenName: '',
        dob: '',
    },
    email: '',
    phoneNo: '',
}
export const UserInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setCreditUse: (state, action: PayloadAction<boolean>) => {
            state.creditUse = action.payload
        },
        setBankUsed: (state, action: PayloadAction<string[]>) => {
            state.bankUsed = action.payload
        },
        setAddress: (state, action: PayloadAction<IAddress>) => {
            state.address = action.payload
        },
        setUserInfo: (state, action: PayloadAction<IUserinfo>) => {
            state.userInfo = action.payload
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setPhoneNo: (state, action: PayloadAction<string>) => {
            state.phoneNo = action.payload
        },
    },
})

export const {
    setCreditUse,
    setBankUsed,
    setAddress,
    setUserInfo,
    setEmail,
    setPhoneNo,
} = UserInfoSlice.actions

export default UserInfoSlice.reducer
