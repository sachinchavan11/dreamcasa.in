import React from 'react';
import Image from 'next/image';
import SearchIcon from '@mui/icons-material/Search';
import styles from './index.module.scss';
import { useState } from 'react';

const ContentBar = () => {
  const [city, setCity] = useState('');

  const handleSearch = (e: any) => {
    setCity(e.target.value);
  };
  return (
    <div className={styles.img_container}>
      <Image
        src="/images/banner_building.jpg"
        alt="content_bar_img"
        layout="fill"
        objectFit="cover"
      />
      <div className={styles.search_bar}>
        <div>
          <input
            type="text"
            placeholder="Search the city"
            className={styles.search_input}
            value={city}
            onClick={handleSearch}
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
