import {createSlice} from "@reduxjs/toolkit";
import {getUSerLogged} from "./actions/userAction";

const initialState = {
    isLoggedIn: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("userData")) || null,
    loading: false,
    error: false,
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        login: (state) => {
            state.isLoggedIn = localStorage.getItem("token");
            state.user = JSON.parse(localStorage.getItem("userData")) || null
        },
        logout: (state) => {
            localStorage.removeItem('userData')
            localStorage.removeItem('token')
            state.isLoggedIn = null
            state.user = null
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getUSerLogged.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getUSerLogged.fulfilled, (state, action) => {
                state.loading = false
                state.user = action.payload
                localStorage.setItem('userData', JSON.stringify(action.payload))
            })
            .addCase(getUSerLogged.rejected, (state, action) => {
                state.loading = false
                state.error = action.payload
            })
    }
})

export const logState = state => state.loginState.isLoggedIn;
export const userState = state => state.loginState.user;
export const loadingState = state => state.loginState.loading;
export const errorState = state => state.loginState.error;
export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;