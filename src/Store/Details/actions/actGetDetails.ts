import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const actGetDetails = createAsyncThunk(
    "DetailSlice/actGetDetails",
    async (id:number, thunkAPI) => {
        const { rejectWithValue } = thunkAPI;
        try {
            const apiKey = "e5bb1f20519b1de50d6a197e8da72668";

            // Detail page
            // DetailInfo

            const DetailsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
            console.log("DetailsResponse:", DetailsResponse);
            const Detailsinfo = DetailsResponse.data;

            // Credits
            const CreditsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
            console.log("CreditsResponse:", CreditsResponse);
            const Credits = CreditsResponse.data;

            // Videos
            const VideosResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`);
            console.log("VideosResponse:", VideosResponse);
            const Videos = VideosResponse.data.results;

            // SimilarMovie
            const SimilarMovieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`);
            console.log("SimilarMovieResponse:", SimilarMovieResponse);
            const SimilarMovie = SimilarMovieResponse.data.results;

            return { Detailsinfo, Credits, Videos, SimilarMovie };

        } catch (error) {
            if (axios.isAxiosError(error)) {
                return rejectWithValue(error.response?.data.message || error.message);
            } else {
                return rejectWithValue("An Expected Error");
            }
        }
    }
);

export default actGetDetails;
