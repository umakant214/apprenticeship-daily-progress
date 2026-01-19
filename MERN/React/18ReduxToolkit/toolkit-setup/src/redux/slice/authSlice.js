import {createSlice} from "@reduxjs/toolkit"
const initialState={}
const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
          return  state=action.payload
        },
        logout:(state)=>{
            state={}
        }
    }
})

export const {setUser,clearUser}=authSlice.actions;
export default authSlice.reducer;