import {createSlice} from "@reduxjs/toolkit"
const initialState={}
const userSlice=createSlice({
    name:"user",
    initialState,
    reducers:{
        setUser:(state,action)=>{
          return  state=action.payload
        },
        clearUser:(state,action)=>{
         return state={}
        }
    }
})

export const {setUser,clearUser}=userSlice.actions;
export default userSlice.reducer