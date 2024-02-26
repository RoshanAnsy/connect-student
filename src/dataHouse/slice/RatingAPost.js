import { createSlice } from "@reduxjs/toolkit";

const initialState={
    
    like:null,dislike:null,share:null,
};

const RatingApost=createSlice({
    name:"rating",
    initialState:initialState,
    reducers:{
        setlike(state,value){
            state.like=value.payload
        },
        setdislike(state,value){
            state.dislike=value.payload
        },
        setShare(state,value){
            state.share=value.payload
        }
    }
});
export const{setlike,setdislike,setShare}=RatingApost.actions;
export default RatingApost.reducer;

