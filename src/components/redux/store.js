import {  configureStore } from "@reduxjs/toolkit";
import { clicksSlise } from "./clicksSlice"; 
 
export const store = configureStore({
    reducer: {
        clicks: clicksSlise.reducer,
    }
})