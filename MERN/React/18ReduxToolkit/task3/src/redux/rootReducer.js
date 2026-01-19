import {combineReducers} from "@reduxjs/toolkit"
import  productReducer from "./Slice/productSlice"

const rootReducer=combineReducers({
    product:productReducer
})

export default rootReducer;