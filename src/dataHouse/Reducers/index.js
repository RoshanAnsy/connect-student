import { combineReducers } from "@reduxjs/toolkit";

import authReducer from "../slice/authSlice";
import profileReducer from "../slice/profileSlice";
import ratingReducer from "../slice/RatingAPost"
import studentReducer from "../slice/StudentSlice"
import idcardReducer from "../slice/idcardSlice"
import idbacksideRe from "../slice/IdbackSideslice"


const rootReducer=combineReducers({
    auth:authReducer,
    profile:profileReducer,
    rating:ratingReducer,
   

    collagee:studentReducer,
    virtualIdCard:idcardReducer,
    idbackside:idbacksideRe,
    
})

export default rootReducer;