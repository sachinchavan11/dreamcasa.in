import React from 'react';
import styles from './index.module.scss';
import FeaturedProps from '../FeaturedProps';
import Image from 'next/image';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const PropsCard = (props: any) => {
  const { index, name, location, extra, pricing } = props;
  return (
    <div className={styles.main_container}>
      <div className={styles.img}>
        <div className={styles.img_cont}>
          <Image
            src={`/images/featuredProps/pic${index}.jpg`}
            alt="featured_propr"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.featured}>Featured ★</div>
      </div>
      <div className={styles.content}>
        <div>
          <p className={styles.company}>{name}</p>
          <div className={styles.location_cont}>
            <LocationOnIcon className={styles.locationIcon} />
            <p className={styles.location}> {location}</p>
          </div>
        </div>
        <div>
          <p className={styles.pricing}>{pricing}</p>
          <p className={styles.extra}>{extra}</p>
        </div>
      </div>
    </div>
  );
};

export default PropsCard;
