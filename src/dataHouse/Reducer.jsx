
import { createSlice } from "@reduxjs/toolkit";

const likeCountSlice=createSlice({
    name:'hert',
     initialState:0,
     reducers:{
        increseLikes:(state,action)=>{
          return state=state+1;
        },
        increseDislike:(state)=>state+1,
     }

});
 export const{increseLikes,increseDislike}=likeCountSlice.actions;
export default  likeCountSlice.reducer;