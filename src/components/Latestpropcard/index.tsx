import React from 'react';
import Image from 'next/legacy/image';
import styles from './index.module.scss';

const LatestPropCard = ({ name, price, area, image }: any) => {
  return (
    <div className={styles.prop_card}>
      <div className={styles.img_cont}>
        <Image src={image} alt="latest_prop" layout="fill" objectFit="cover" />
      </div>
      <div className={styles.info_details}>
        <p className={styles.title}>{name}</p>
        <p className={styles.area}>{area}</p>
      </div>
    </div>
  );
};
export default LatestPropCard;
