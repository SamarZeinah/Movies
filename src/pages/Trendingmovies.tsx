import React, { useEffect } from 'react';
import TrendingmoviesItem from '../components/movies/Trendingmovies/TrendingmoviesItem';
import actGetHeroSlide from '../Store/Heroslide/actions/actGetHeroSlide';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Row, Col } from 'react-bootstrap';
import styles from '../components/movies/Trendingmovies/TrendingmoviesItem.module.css'

const Trendingmovies = () => {
  const{TrendingHeader,Section}=styles
  const dispatch = useDispatch();
  const { movies, loading, error } = useSelector((state) => state.Heroslide);

  useEffect(() => {
    if (!movies.length) {
      dispatch(actGetHeroSlide());
    }
  }, [dispatch, movies.length]);

  if (loading === "pending") {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>Error..</p>;
  }

  return (
    <div className={Section}>
      <div className={TrendingHeader}>
        <h1>Trending movies</h1>
        <button>View more</button>
      </div>
      <Carousel  indicators={false}>
        {movies.length > 0 ? (
          movies.map((record, index) => (
            index % 6 === 0 && (
              <Carousel.Item key={record.id}>
                <Row className="d-flex justify-content-between">
                  {movies.slice(index, index + 6).map((item) => (
                    <Col md={2} key={item.id}>
                      <TrendingmoviesItem
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

export default Trendingmovies;
