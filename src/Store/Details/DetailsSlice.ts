import { createSlice } from "@reduxjs/toolkit";
import actGetDetails from "./actions/actGetDetails";
import React from 'react';

interface DetailsState{
    
    Details: {
        id: number;
        poster_path: string;
        backdrop_path: string;
        title: string;
        genres: { id: number; name: string }[];
        overview: string;
        release_date: string;
        vote_average: number;
    } | null;
        Credits: {
            cast: { id: number; name: string; character: string; profile_path: string }[];
        };
        Videos: {
            id: number;
            key: string;
            name: string;
            site: string;
            type: string;
        }[];
        SimilarMovie : {
            id: number;
            title: string;
            backdrop_path: string;
            vote_average: number;
        }[];
    
    loading: "idle" | "pending" | "succeeded" | "failed";
    error:string|null;
}

const  initialState:DetailsState={
   
        Details:null ,   
        Credits: { cast: [] },
        Videos:[] ,    
        SimilarMovie :[] ,  
    
    loading: 'idle',
    error:null,
}
export const DetailsSlice=createSlice({
 name:"DetailSlide" ,
 initialState,
 reducers:{
    MoviDetailscleanUp:(state)=>{
state.Details=null;
state.Credits = { cast: [] };
state.Videos=[];
state.SimilarMovie=[];



    }
 },
 extraReducers:(builder)=>{
    builder.addCase(actGetDetails.pending,(state)=>{
        state.loading="pending";
        state.error=null;
    });
    builder.addCase(actGetDetails.fulfilled,(state,action)=>{
        state.loading = "succeeded";
    state.Details = action.payload.Detailsinfo; 
    state.Credits = action.payload.Credits; 
    state.Videos = action.payload.Videos;
    state.SimilarMovie = action.payload.SimilarMovie;


    });
    builder.addCase(actGetDetails.rejected,(state,action)=>{
      state.loading="failed";
if(typeof action.payload==="string"){
    state.error=action.payload;

}else{
    state.error = "An unknown error occurred.";

}
    });
 }
 }
  
)
export const {MoviDetailscleanUp  } = DetailsSlice.actions
export{actGetDetails};
export default DetailsSlice.reducer