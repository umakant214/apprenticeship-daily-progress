import {createSlice} from "@reduxjs/toolkit";
const initialState=[]
const studentSlice=createSlice({
    name:"student",
    initialState,
    reducers:{
        setStudent:(state,action)=>{
            // console.log(action.payload);
            
            return state=action.payload
        },
        logout:(state)=>{
            return state=[]
        }
    }
})

export const {setStudent,logout}=studentSlice.actions;
export default studentSlice.reducer;