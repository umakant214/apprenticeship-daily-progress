import {combineReducers} from "@reduxjs/toolkit";
import studentSlice from "./slice/studentSlice"
const rootReducer=combineReducers({
    student:studentSlice,
})

export default rootReducer;