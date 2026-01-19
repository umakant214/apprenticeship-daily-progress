import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import authSlice from "./slice/authSlice";

const rootReducer=combineReducers({
    user:userSlice,
    auth:authSlice
})
export default rootReducer;