import React from 'react';
import styles from './index.module.scss';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoBagAddSharp } from 'react-icons/io5';

const SideNav = () => {
  return (
    <div className={styles.main_cont}>
      <div className={styles.dash_cont}>
        <ul>
          <li>
            <div className={styles.dash_items}>
              <MdOutlineSpaceDashboard size={20} />
              <p className={styles.item_title}>Dashboard</p>
            </div>
          </li>
          <li>
            <div className={styles.dash_items}>
              <FaRegUserCircle size={20} />
              <p className={styles.item_title}>Profile</p>
            </div>
          </li>
          <li>
            <div className={styles.dash_items}>
              <IoBagAddSharp size={20} />
              <p className={styles.item_title}>Add Props</p>
            </div>
          </li>
          <li>
            <div className={styles.dash_items}>
              <MdOutlineSpaceDashboard size={20} />
              <p className={styles.item_title}>Edit Props</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
