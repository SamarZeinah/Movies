import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetHeroSlide = createAsyncThunk(
    "Heroslide/actGetHeroSlide",
    async (_, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            //movies data
            const apiKey = "e5bb1f20519b1de50d6a197e8da72668";
            // const response = await axios.get(`https://api.themoviedb.org/3/movie/popular/${id}?api_key=${apiKey}&page=1`);

           
            const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=1`);
            console.log("Response data:", response.data);
            const movies= response.data.results; 

            //Top Rated movies
            const TopmovieResponse=await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=1`);
            console.log("TopmovieResponse:",TopmovieResponse);
            const TopRatedmovies=TopmovieResponse.data.results;

           //Tv data
           const tvResponse = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${apiKey}&page=1`);       
                console.log("Tvresponse:",tvResponse.data);
            const TvShows=tvResponse.data.results;

             //Top Rated Tv
             const TopTvResponse=await axios.get(`https://api.themoviedb.org/3/tv/top_rated?api_key=${apiKey}&page=1`);
             console.log("TopTvResponse:",TopTvResponse);
             const TopRatedTv=TopTvResponse.data.results;

             return {movies,TopRatedmovies,TvShows,TopRatedTv  };

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("An Expected Error");
            }
        }
    }
);

export default actGetHeroSlide;
