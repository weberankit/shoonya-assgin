import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
const appStore=configureStore({
  reducer:{
    dataslice:dataSlice
  }
})
export default appStore