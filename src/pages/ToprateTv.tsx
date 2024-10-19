import React, { useEffect } from 'react';
import ToprateTvItem from '../components/movies/TopratedTv/TopratedTvItem';
import actGetHeroSlide from '../Store/Heroslide/actions/actGetHeroSlide';
import { useSelector, useDispatch } from 'react-redux';
import { Carousel, Row, Col } from 'react-bootstrap';
import styles from '../components/movies/TopratedTv/TopratedTv.module.css'

const TopratedTv = () => {
  const{TrendingHeader,section}=styles
  const dispatch = useDispatch();
  const { TopRatedTv, loading, error } = useSelector((state) => state.Heroslide);

  useEffect(() => {
    if (!TopRatedTv.length) {
      dispatch(actGetHeroSlide());
    }
  }, [dispatch, TopRatedTv.length]);

  if (loading === "pending") {
    return <p>Loading..</p>;
  }
  if (error) {
    return <p>Error..</p>;
  }




return (
  <div className={section}>
    <div className={TrendingHeader}>
      <h1>Top rated Tv</h1>
      <button>View more</button>
    </div>
    <Carousel indicators={false}>
      {TopRatedTv.length > 0 ? (
        TopRatedTv.map((record, index) => (
          index % 6 === 0 && (
            <Carousel.Item key={record.id}>
              <Row className="d-flex justify-content-between">
                {TopRatedTv.slice(index, index + 6).map((item) => (
                  <Col md={2} key={item.id}>
                    <ToprateTvItem
                      id={item.id}
                      name={item.name}
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

export default TopratedTv;
