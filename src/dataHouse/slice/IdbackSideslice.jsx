import { createSlice } from "@reduxjs/toolkit";

const backside=createSlice({
    name:"idbackside",
    initialState:false,
    reducers:{
        changeside:(state)=>!state,
    }
});
export const {changeside}=backside.actions;
export default backside.reducer;