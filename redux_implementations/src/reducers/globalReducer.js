import { createSlice } from "@reduxjs/toolkit";
const globalReducer=createSlice({
    name:'global',
    initialState:{},
    reducers:{
        addToGlobalState(state,action){
            console.log("in reducer",state,action.payload)
            return {...state,...action.payload}
        },
        removeFromGlobalState(state,action){
            delete state[action.payload]
        }
    }
})
export const {addToGlobalState,removeFromGlobalState}=globalReducer.actions;
export default globalReducer.reducer