import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import CardFeature from '../CardFeature';
import Slider from 'react-slick';

const cardlist = [
  {
    title: 'Buy a home',
    description:
      'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
    label: 'Browse More',
    image: '/images/buyhome.jpg',
  },
  {
    title: 'Buy a Flat ',
    description:
      'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    label: 'Visit Site',
    image: '/images/buyflat.jpg',
  },
  {
    title: 'Sell a Home',
    description:
      'No matter what path you take to sell your home, we can help you navigate a successful sale.',
    label: 'Visit Site',
    image: '/images/sellhome.jpg',
  },
];

const Services = () => {
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
      <div className={styles.title_gif}>
        <h2 className={styles.title}>
          OUR <span className={styles.highlight}>SERVICES</span>
        </h2>
        <div className={styles.animation_cont}>
          <Image
            src="/gifs/building_animation.gif"
            alt="animation_building"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <p className={styles.desc}>
        Unlocking Doors to Your Dreams - Our Services Tailored for Your Perfect
        Home.
      </p>
      <div className={styles.feature_cont}>
        {cardlist.map((item: any, index: any) => {
          return (
            <div key={index} className={styles.card_main_container}>
              <CardFeature
                title={item.title}
                description={item.description}
                label={item.label}
                image={item.image}
              />
            </div>
          );
        })}
      </div>
      <div className={styles.mobile_cont}>
        <Slider {...sliderSettings}>
          {cardlist.map((item: any, index: any) => (
            <div key={index} className={styles.card_main_container}>
              <CardFeature
                title={item.title}
                description={item.description}
                label={item.label}
                image={item.image}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Services;
