import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';
const initialState={
    signupData:null,
    loading:false,
    // token:localStorage.getItem("token")? JSON.parse(localStorage.getItem("token")):null,
    token:Cookies.get("token")? Cookies.get("token"):null,
    isOpen:null,
    
};

const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignupData(state,value){
            state.signupData=value.payload;
        },
        setLoding(state,value){
            state.loading=value.payload;
        },
        setToken(state,value){
            state.token=value.payload;
        },
        setClose(state,value){
            state.isOpen=value.payload
        }
    }
});
export const{setSignupData,setLoding,setToken,setClose}=authSlice.actions;
export default authSlice.reducer;