import React from 'react';
import Image from 'next/image';
import styles from './index.module.scss';


const LatestPropCard = ({name,price,area}:any) => {
  return (
    <div className={styles.prop_card}>
      <div className={styles.img_cont}>
        <Image
          src="/images/latestprops/suchirindia.png"
          alt="latest_prop"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.info_details}>
        <p className={styles.title}>{name}</p>
        <p className={styles.area}>{area}</p>
      </div>
    </div>
  );
};
export default LatestPropCard;
