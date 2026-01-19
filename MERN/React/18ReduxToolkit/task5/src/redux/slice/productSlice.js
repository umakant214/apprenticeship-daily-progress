import {createSlice} from "@reduxjs/toolkit"
const initialState=[];
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        productData:(state,action)=>{
            return state=action.payload;
        },
        deleteData:(state,action)=>{
            return state=[]
        }
    }
})
export const {productData,deleteData}= productSlice.actions;
export default productSlice.reducer;