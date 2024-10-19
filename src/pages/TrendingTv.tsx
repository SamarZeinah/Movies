
import React, { useEffect } from 'react';
import TrendingTvItem from '../components/movies/TrendingTv/TrendingTvItem';
import styles from '../components/movies/TrendingTv/TrendingTv.module.css';
import { useDispatch, useSelector } from 'react-redux';
import actGetHeroSlide from '../Store/Heroslide/actions/actGetHeroSlide';
import { Carousel, Row, Col } from 'react-bootstrap';

const { TrendingHeader ,Section} = styles;

const TrendingTvShows = () => {
  const dispatch = useDispatch();
  const { Tv = [], loading, error } = useSelector((state) => state.Heroslide);
 
  useEffect(() => {
    if (Tv.length === 0) {
      dispatch(actGetHeroSlide());
    }
    console.log("Tv:",Tv);
  }, [dispatch,Tv.length]);

  if (loading==="pending") {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div  className={Section}>
      <div className={TrendingHeader}>
        <h1>Trending TV</h1>
        <button>View More</button>
      </div>
      <Carousel  indicators={false} >
        {Tv.length > 0 ? (
          Tv.map((record, index) => (
            index % 6 === 0 && (
              <Carousel.Item key={record.id}>
                <Row className="d-flex justify-content-between">
                  {Tv.slice(index, index + 6).map((item) => (
                    <Col md={2} key={item.id}>
                  <TrendingTvItem
                    id={item.id}
                    title={item.name} 
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
}

export default TrendingTvShows;
