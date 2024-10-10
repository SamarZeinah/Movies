import { createSlice } from "@reduxjs/toolkit";


interface HeroslideState{
    records:{
    id: number,
    adult: boolean,
    }[];
    loading: "idle" | "pending" | "succeeded" | "failed";
    error:string|null;
}

const  initialState:HeroslideState={
    records:[],
    loading: 'idle',
    error:null,
}
export const HeroslideSlice=createSlice({
 name:"Heroslide" ,
 initialState,
 reducers:{},
  
})
export const {  } = HeroslideSlice.actions

export default HeroslideSlice.reducer