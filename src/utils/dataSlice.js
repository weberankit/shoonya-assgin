import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice(
    {
  name:"DataSlice",
  initialState:{
    item:null,
    List:null,
    subList:null
  },
  reducers:{
addData:(state,action)=>{
  state.item=action.payload
},

addFilterData:(state,action)=>{
  state.List=action.payload
},

addSubFilterData:(state,action)=>{
  state.subList=action.payload
},
  }


    }
)

export default dataSlice.reducer
export const {addData,addFilterData,addSubFilterData} = dataSlice.actions