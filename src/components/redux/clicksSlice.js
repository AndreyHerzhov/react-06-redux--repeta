import { createSlice } from "@reduxjs/toolkit";
 

 
export const clicksSlise = createSlice({
    name: "clicks",
    initialState: {value: 0},
    reducers: {
        increment(state, action) {
            state.value += action.payload
        },
        reset(state){
            state.value = 0
        }
    }
})

export const {increment, reset} = clicksSlise.actions
 
export const getClicks = state => state.clicks.value

// import {createAction, configureStore, createReducer } from "@reduxjs/toolkit";

// export const increment = createAction('cliks/increment')
// console.log(increment.toString())
// const clicksReducer = createReducer(
//     {value: 0},
//      {
//     [increment]: (state, action) => {
//          state.value += action.payload
//     }
// })

// export const store = configureStore({
//     reducer: {
//         clicks: clicksReducer,
//     }
// })

