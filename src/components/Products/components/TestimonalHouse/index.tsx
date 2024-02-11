import React from 'react';
import styles from './index.module.scss';
import Slider from 'react-slick';
import BuilderReview from '../BuilderReview';

const TestimonalBuilder = () => {
  const data = [
    {
      desc: 'DreamCasa Pvt Limited is your premier partner in turning dreams into reality when it comes to finding your perfect home. With a commitment to excellence and a passion for creating spaces that inspire, DreamCasa brings a wealth of expertise to the real estate landscape. Our team is dedicated to providing unparalleled service, ensuring ',
      author: 'Mahesh',
    },
    {
      author: 'Sachin',
      desc: 'Exceptional service! I had the pleasure of working with DreamCasa Pvt Limited, and their attention to detail exceeded my expectations. From the initial consultation to the final closing, the team was professional, responsive, and truly invested in making my dream home a reality. Their commitment to customer satisfaction sets them apart in the industry. ',
    },
    {
      author: 'Naresh',
      desc: "Choosing DreamCasa Pvt Limited was the best decision for my property search. The team's dedication to understanding my needs and providing tailored solutions made the entire process seamless. They guided me through every step, ensuring a smooth and stress-free experience.",
    },
  ];
  const sliderSettings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.main_cont}>
      <div className={styles.heading_cont}>
        <p className={styles.heading}>
          What Our
          <br></br>
          Customer Says
        </p>
      </div>
      <div className={styles.slider_cont}>
        {/* <Slider {...sliderSettings}> */}
          <BuilderReview />;
        {/* </Slider> */}
      </div>
    </div>
  );
};

export default TestimonalBuilder;
