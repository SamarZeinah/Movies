import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // Import useParams
import MovieDetailsItem from '../components/movies/Moviedetails/MovieDetailsItem';
import actGetDetails from '../Store/Details/actions/actGetDetails';
import { RootState } from '../store/store'; 
import { MoviDetailscleanUp }from '../Store/Details/DetailsSlice';

const MovieDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const { Details, Credits, Videos, SimilarMovie, loading, error } = useSelector((state: RootState) => state.DetailSlide);

  useEffect(() => {
      if (id) {
          const movieId = Number(id);
          if (!isNaN(movieId)) {
              dispatch(actGetDetails(movieId));
          } else {
              console.error("movieId is not a number");
          }
      }
      return()=>{
        dispatch(MoviDetailscleanUp());
      }
  }, [dispatch, id]);

  if (loading === "pending") {
      return <p>Loading...</p>;
  }

  if (error) {
      return <p>Error: {error}</p>;
  }

  return (
      <>
          {Details && (
              <MovieDetailsItem
                  Details={Details}
                  Credits={Credits}
                  Videos={Videos}
                  SimilarMovie={SimilarMovie}
              />
          )}
      </>
  );
};

export default MovieDetails;
