import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isModalOpen: false,
}

const groupModalSlice = createSlice({
    name: "groupModal",
    initialState,
    reducers: {
        setIsOpenModal: (state, action) => {
            state.isModalOpen = action.payload;
        }
    }
})

export const modalGroupOpenState = state => state.groupModalState.isModalOpen
export const {setIsOpenModal} = groupModalSlice.actions;
export default groupModalSlice.reducer