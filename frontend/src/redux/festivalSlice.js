import {createSlice} from "@reduxjs/toolkit";
import {getAllFestivals} from "./actions/festivalsAction";

const initialState = {
    festivals: [],
    loading: false,
    error: false,
}

const festivalSlice = createSlice({
    name: "festival",
    initialState,
    extraReducers: builder => {
        builder
            .addCase(getAllFestivals.pending, (state, action) => {
                state.loading = true;
            })
            .addCase(getAllFestivals.fulfilled, (state, action) => {
                state.loading = false;
                state.festivals = action.payload;
                console.log(state.festivals);
            })
            .addCase(getAllFestivals.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })
    }
})

export const festivalsData = state => state.festivalState.festivals
export const loadingFestivalsData = state => state.festivalState.loading
export const errorFestivalsData = state => state.festivalState.error
export default festivalSlice.reducer