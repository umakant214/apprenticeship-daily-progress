import { combineReducers } from "@reduxjs/toolkit";
import profileSlice from "./slice/profile";
import userSlice from "./slice/user"
const rootReducer=combineReducers({
    profile:profileSlice,
    user:userSlice,
})
export default rootReducer;