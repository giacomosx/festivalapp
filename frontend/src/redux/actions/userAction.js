import {createAsyncThunk} from '@reduxjs/toolkit';
import AxiosApi from "../../api/axiosApi";

const api = new AxiosApi()

export const getUSerLogged = createAsyncThunk('userLogged/GET', async () => {
    try {
        return await api.get('/user/me')
    } catch (e) {
        console.log(e)
        return e.message;
    }
})

