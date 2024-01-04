import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import ReviewCardslider from '../reviewCard';
import Slider from 'react-slick';

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

const ReviewCard = () => {
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
    <div className={styles.main_container}>
      <div className={styles.heading}>
        <h2 className={styles.highlight}>
          CLIENT TESTIMONIALS:
          <span className={styles.title}>VOICES ABOUT OUR COMPANY</span>
        </h2>
        <div className={styles.gif_cont}>
          <Image
            src="/images/gifs/clients_success.gif"
            alt="animation"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className={styles.tagline}>
        {`"Empowering Dreams, Delighting Lives - Where Customer Satisfaction is Our
        Commitment!"`}
      </p>
      <div className={styles.card_image_cont}>
        <div className={styles.img_cont}>
          <Image
            src="/images/background/review_pic.jpg"
            alt="customer_review"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.card_slider}>
          <Slider {...sliderSettings}>
            {data.map((item: any, index) => (
              <ReviewCardslider
                key={index}
                desc={item.desc}
                author={item.author}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
