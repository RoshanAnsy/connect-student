import { createSlice } from "@reduxjs/toolkit";

const idcard=createSlice({
    name:'virutalId',
    initialState:false,

    reducers:{
        setcard:(state)=>!state,
    }
});
export const {setcard}=idcard.actions;

export default idcard.reducer;