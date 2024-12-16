import AxiosApi from "../../api/axiosApi";
import {createAsyncThunk} from "@reduxjs/toolkit";

const api = new AxiosApi()

export const getAllFestivals = createAsyncThunk('allFestivals/GET',async () => {
    try {
        console.log('start')
        return await api.get(`/public/events`);
    } catch (e) {
        console.log(e)
        return e.message;
    }
})