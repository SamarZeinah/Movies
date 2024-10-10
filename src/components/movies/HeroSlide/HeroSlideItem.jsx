import React from 'react';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from '../HeroSlide/HeroSlideItem.module.css'
const{sliderbox,slider,leftpart,rightpart}=styles;
const HeroSlideItem = () => {
  return (
    <Carousel>
    <Carousel.Item className={sliderbox}>
  <div className={slider}>
    <div className={leftpart}>
      <h2>First slide label</h2>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    <div className={btns}>
      <button>Watch now</button>
      <button>Watch trailer</button>

    </div>
    </div>

    <div className={rightpart}>
      <img
        src="https://th.bing.com/th/id/R.a7ca41e23a404378d20a1d9567fc4d3c?rik=22bHjb0drlrSdA&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f20400000%2fPublicity-Photo-superman-the-movie-20409049-1052-1400.jpg&ehk=h%2bJNXCFwsA7IYbA0godxEKu4Q53%2boctgItN%2bScDFUhM%3d&risl=&pid=ImgRaw&r=0"
        alt="First slide"
        className="d-block w-50" 
      />
    </div>
  </div>
</Carousel.Item>



    </Carousel>
  );
}

export default HeroSlideItem;
