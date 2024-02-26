import { configureStore } from '@reduxjs/toolkit';
import studentReducer from './slice/StudentSlice';
import likesReducer from './Reducer';
import idcardReducer from './slice/idcardSlice';
import idbacksideRe from './slice/IdbackSideslice';
import authReducer from "./slice/authSlice";
import profileReducer from "./slice/profileSlice";


const store=configureStore({
  reducer:{
    auth:authReducer,
    profile:profileReducer,
    custom2:likesReducer,
    collagee:studentReducer,
    virtualIdCard:idcardReducer,
    idbackside:idbacksideRe,

  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    mainMiddleware,
  ],

});
export default store;
