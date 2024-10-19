import React, { useEffect } from 'react';
import TopratemoviesItem from '../components/movies/Topratedmovies/TopratedmoviesItem';
import actGetHeroSlide from '../Store/Heroslide/actions/actGetHeroSlide';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Row, Col } from 'react-bootstrap';
import styles from '../components/movies/Topratedmovies/Topratedmovies.module.css'

const Topratedmovies = () => {
  const{TrendingHeader,section}=styles
  const dispatch = useDispatch();
  const { TopRatedmovies, loading, error } = useSelector((state) => state.Heroslide);

  useEffect(() => {
    if (!TopRatedmovies.length) {
      dispatch(actGetHeroSlide());
    }
  }, [dispatch, TopRatedmovies.length]);

  if (loading === "pending") {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>Error..</p>;
  }

// ترتيب الأفلام بناءً على متوسط التصويت
// const sortedMovies = [...movies].sort((a, b) => b.vote_average - a.vote_average);



return (
  <div className={section}>
    <div className={TrendingHeader}>
      <h1>Top rated movies</h1>
      <button>View more</button>
    </div>
    <Carousel indicators={false}>
      {TopRatedmovies.length > 0 ? (
        TopRatedmovies.map((record, index) => (
          index % 6 === 0 && (
            <Carousel.Item key={record.id}>
              <Row className="d-flex justify-content-between">
                {TopRatedmovies.slice(index, index + 6).map((item) => (
                  <Col md={2} key={item.id}>
                    <TopratemoviesItem
                      id={item.id}
                      title={item.title}
                      poster_path={item.poster_path}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          )
        ))
      ) : (
        <p>There are no Hero slides available.</p>
      )}
    </Carousel>
  </div>
);
};

export default Topratedmovies;
