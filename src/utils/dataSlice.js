import { createSlice } from "@reduxjs/toolkit";

const dataSlice=createSlice(
    {
  name:"DataSlice",
  initialState:{
    item:null
  },
  reducers:{
addData:(state,action)=>{
  state.item=action.payload
}

  }


    }
)

export default dataSlice.reducer
export const {addData} = dataSlice.actions