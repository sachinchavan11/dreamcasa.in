import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './index.module.scss';
import { slickSettings } from '../settings';

const ContentBar = () => {
  const [city, setCity] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleSearch = (e: any) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % slickSettings.slidesToShow
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.img_container}>
      <Slider {...slickSettings}>
        <div className={styles.img_wrap}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/searchbar/image4.jpg"
              alt="content_bar_img"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.img_wrap}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/banner_building.jpg"
              alt="content_bar_img"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.img_wrap}>
          <div className={styles.imageContainer}>
            <Image
              src="/images/searchbar/city.jpg"
              alt="content_bar_img"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </Slider>
      <div className={styles.search_bar}>
        <div>
          <input
            type="text"
            placeholder="Search the city"
            className={styles.search_input}
            value={city}
            onChange={handleSearch}
          />
        </div>
        <div>
          <SearchIcon className={styles.search_icon} />
        </div>
      </div>
    </div>
  );
};

export default ContentBar;
