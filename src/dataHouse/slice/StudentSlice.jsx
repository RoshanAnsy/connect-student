import {  createSlice } from "@reduxjs/toolkit";

const studentslice=createSlice({
    name:"dataTrans",
    initialState:false,
    reducers:{
        dostudent:(state)=>!state,
    }
});
export const {dostudent } =studentslice.actions;
export default studentslice.reducer;