import React from 'react';
import styles from './index.module.scss';
import FeaturedProps from '../FeaturedProps';
import Image from 'next/image';

const PropsCard = (props: any) => {
  const { index, name, location } = props;
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
      </div>
      <p className={styles.company}>{name}</p>
      <p className={styles.location}>{location}</p>
    </div>
  );
};

export default PropsCard;
