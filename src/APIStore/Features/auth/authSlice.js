import { createSlice } from '@reduxjs/toolkit'


const INITAL_STATE = {


    auth: '',
    authLoading: false,
    authError: null,


}

const authSlice = createSlice({
    name: "auth",
    initialState: INITAL_STATE,
    reducers: {

    },
    extraReducers: bulder => {

    },

});

export const { clearLoginInfo } = authSlice.actions;
export default authSlice.reducer