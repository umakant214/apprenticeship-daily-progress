import {createSlice} from "@reduxjs/toolkit";

const initialState={};
const profileSlice=createSlice({
    name:"profile",
    initialState,
    reducers:{
        setProfile:(state,action)=>{
         return state=action.payload;
        },
        clearProfile:(state)=>{
            return state={}
        }
    }
})
export const {setProfile,clearProfile}=profileSlice.actions;
export default profileSlice.reducer;