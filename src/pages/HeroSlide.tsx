

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeroSlideItem from "../components/movies/HeroSlide/HeroSlideItem";
import  actGetHeroSlide  from '../Store/Heroslide/actions/actGetHeroSlide';
import { Carousel } from 'react-bootstrap';

const HeroSlide = () => {
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.Heroslide);

  useEffect(() => {
    if (!movies.length) {
      dispatch(actGetHeroSlide());
    }
  }, [dispatch, movies.length]);

  if (loading === 'pending') {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <Carousel indicators={false} >
      {movies.length > 0 ? (
        movies.map((record) => (
          <Carousel.Item key={record.id} style={{width:"100%"}}>
            <HeroSlideItem 
              title={record.title} 
              overview={record.overview} 
              backdrop_path={record.backdrop_path} 
              poster_path={record.poster_path}
              release_date={record.release_date}
              vote_average={record.vote_average}
              vote_count={record.vote_count}
              // id={Videos.id}
            />
          </Carousel.Item>
        ))
      ) : (
        <p>There are no Hero slides available.</p>
      )}
    </Carousel>
  );
};

export default HeroSlide;
// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import HeroSlideItem from "../components/movies/HeroSlide/HeroSlideItem";
// import { actGetHeroSlide } from '../Store/Heroslide/HeroslideSlice';
// import { Carousel } from 'react-bootstrap';
// import styles from '../components/movies/HeroSlide/HeroSlideItem.module.css'; 

// const HeroSlide = () => {
//   const dispatch = useDispatch();
//   const { movies, loading, error } = useSelector((state) => state.Heroslide);

//   useEffect(() => {
//     if (!movies.length) {
//       dispatch(actGetHeroSlide());
//     }
//   }, [dispatch, movies.length]);

//   if (loading === 'pending') {
//     return <p>Loading...</p>;
//   }

//   if (error) {
//     return <p>Error: {error}</p>;
//   }

//   return (
//     <Carousel indicators={false} className={styles.carousel}>
//       {movies.length > 0 ? (
//         movies.map((record) => (
//           <Carousel.Item key={record.id} className={styles.carouselItem}>
//             <HeroSlideItem 
//               title={record.title} 
//               overview={record.overview} 
//               backdrop_path={record.backdrop_path} 
//               poster_path={record.poster_path}
//               viedokey={record.key}
//               release_date={record.release_date}
//               vote_average={record.vote_average}
//               vote_count={record.vote_count}
//             />
//           </Carousel.Item>
//         ))
//       ) : (
//         <p>There are no Hero slides available.</p>
//       )}
//     </Carousel>
//   );
// };

// export default HeroSlide;
