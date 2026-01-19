import {combineReducers} from "@reduxjs/toolkit"
import studentReducer from "./slice/studentSlice"

const rootReducer=combineReducers({
    student:studentReducer,
})
export default rootReducer