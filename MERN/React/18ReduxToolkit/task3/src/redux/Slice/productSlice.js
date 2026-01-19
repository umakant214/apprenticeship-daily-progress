import {createSlice} from "@reduxjs/toolkit";
const initialState=[];
const productSlice=createSlice({
    name:"product",
    initialState,
    reducers:{
        setProduct:(state,action)=>{
            console.log(state,"@@@@@@@@@@@@@");
            
            return state=action.payload;
        }
    }
})

export const {setProduct} =productSlice.actions;
export default productSlice.reducer;