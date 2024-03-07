import React from 'react';
import styles from './index.module.scss';
import { IoIosSettings } from 'react-icons/io';
import Profilecard from '@/components/Profilecard';

const ProfileComponent = () => {
  return (
    <div className={styles.main_container}>
      <p className={styles.title}>Profile</p>
      <div className={styles.settings}>
        <IoIosSettings size={30} />
      </div>
      <div className={styles.card_container}>
        <Profilecard
          title={'Profile Details'}
          subdesc={'Name,contact details ,profile pic'}
        />
        <Profilecard
          title={'Password Details'}
          subdesc={'Manage your password ,reset'}
        />
      </div>
    </div>
  );
};

export default ProfileComponent;
