import { createSlice } from "@reduxjs/toolkit";
import actGetHeroSlide from "./actions/actGetHeroSlide";
import React from 'react';

interface HeroslideState{
    movies:{
        id: number;
        adult: boolean;
        backdrop_path: string;
        title: string;
        vote_average:number;

        original_language: string;
        video:string;

    }[];
    Tv:{
        id: number;
        adult: boolean;
        title: string;
        poster_path: string;
        vote_average:number;

        backdrop_path: string;
        original_language: string;
  
    }[],
    TopRatedmovies: {
        id: number;
        adult: boolean;
        backdrop_path: string;
        title: string;
        vote_average: number;
        original_language: string;
        video: string;
    }[],
    TopRatedTv: {
        id: number;
        adult: boolean;
        name: string;
        poster_path: string;
        vote_average: number;
        backdrop_path: string;
        original_language: string;
    }[],
  
    loading: "idle" | "pending" | "succeeded" | "failed";
    error:string|null;
}

const  initialState:HeroslideState={
    movies:[],
    TopRatedmovies:[],
    Tv:[],
    TopRatedTv:[],
    loading: 'idle',
    error:null,
}
export const HeroslideSlice=createSlice({
 name:"Heroslide" ,
 initialState,
 reducers:{},
 extraReducers:(builder)=>{
    builder.addCase(actGetHeroSlide.pending,(state)=>{
        state.loading="pending";
        state.error=null;
    });
    builder.addCase(actGetHeroSlide.fulfilled,(state,action)=>{
        state.loading="succeeded";
        state.movies=action.payload.movies;
        state.TopRatedmovies = action.payload.TopRatedmovies;        
        state.Tv=action.payload.TvShows;
        state.TopRatedTv=action.payload.TopRatedTv;


    });
    builder.addCase(actGetHeroSlide.rejected,(state,action)=>{
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
export const {  } = HeroslideSlice.actions
export{actGetHeroSlide};
export default HeroslideSlice.reducer