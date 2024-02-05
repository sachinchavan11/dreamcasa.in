import React from 'react';
import styles from './index.module.scss';
import ShareIcon from '@mui/icons-material/Share';
import LocalPrintshopIcon from '@mui/icons-material/LocalPrintshop';
const PropDetails = () => {
  return (
    <div className={styles.main_cont}>
      <div className={styles.home_section}>
        <div>
          <p className={styles.title}>South Sun House</p>
          <div className={styles.prop_type}>
            <p>Sell</p>
            <p>Villas</p>
            <p>PROPERTY ID: 56H886</p>
            <p>5104</p>
          </div>
        </div>
        <div className={styles.options_cont}>
          <p className={styles.price}>Price:260000</p>
          <div className={styles.share_icons}>
            <p>Add to wishlist</p>
            <p>+</p>
            <p>
              <ShareIcon />
            </p>
            <p>
              <LocalPrintshopIcon />
            </p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default PropDetails;
