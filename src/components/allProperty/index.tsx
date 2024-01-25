import React from 'react';
import styles from './index.module.scss';

const AllProperty = () => {
  return (
    <div className={styles.main_cont}>
      <div className={styles.search_cont}>
        <div className={styles.filter_type}>
          <label className={styles.type}>Type:</label>
          <select id="type">
            <option value="residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Rent">Rent</option>
            <option value="Investment">Investment</option>
          </select>
        </div>
        <div className={styles.filter_type}>
          <label className={styles.type}>Purpose:</label>
          <select id="purpose">
            <option value="buyhome">Buying a Home</option>
            <option value="Commercial">Commercial</option>
            <option value="Rent">Rent</option>
            <option value="RetirementLiving">Retirement Living</option>
          </select>
        </div>
        <div  className={styles.filter_type}>
          <label className={styles.type}>City:</label>
          <input type="text" id="city" placeholder="Enter City" />
        </div>
        <div  className={styles.filter_type}>
          <label className={styles.type}>Price From:</label>
          <input type="number" id="priceFrom" placeholder="Min Price" />
        </div>
        <div className={styles.filter_type}>
          <label className={styles.type}>Price To:</label>
          <input type="number" id="priceTo" placeholder="Max Price" />
        </div>
        <div className={styles.btn_cont}>
          <button type="button">Search</button>
        </div>
      </div>
    </div>
  );
};

export default AllProperty;
