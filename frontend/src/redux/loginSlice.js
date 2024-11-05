import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn: localStorage.getItem("token") || null,
    user: JSON.parse(localStorage.getItem("userData")) || null
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
            state.isLoggedIn = null
            state.user = null
            localStorage.removeItem('token')
            localStorage.removeItem('userData')
        }
    }
})

export const logState = state => state.loginState.isLoggedIn;
export const userState = state => state.loginState.user;
export const {login, logout} = loginSlice.actions;
export default loginSlice.reducer;