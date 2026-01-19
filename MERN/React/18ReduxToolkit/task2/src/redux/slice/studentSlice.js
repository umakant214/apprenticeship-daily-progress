import {createSlice} from "@reduxjs/toolkit"
const initialState={};
const studentSlice=createSlice({
    name:"student",
    initialState,
    reducers:{
        setStudent:(state,action)=>{
            return state=action.payload;
        },
        clearStudent:(state)=>{
            return state={};
        }
    }
})

export const {setStudent,clearStudent}=studentSlice.actions;
export default studentSlice.reducer;