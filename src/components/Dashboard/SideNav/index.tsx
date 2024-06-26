import React from 'react';
import styles from './index.module.scss';
import { MdOutlineSpaceDashboard } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { IoBagAddSharp } from 'react-icons/io5';
import { MdEditNote } from 'react-icons/md';
import { useState } from 'react';
import Image from 'next/legacy/image';
import { useRouter } from 'next/router';
import { Dashboard } from '@mui/icons-material';
import DashboardComponent from '../DashboardComponent';
import ProfileComponent from '../ProfileComponent';
import { SiHomeassistantcommunitystore } from 'react-icons/si';

const SideNav = () => {
  const router = useRouter();
  const handleImgClick = () => {
    router.push('/');
  };
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (event: any, newValue: number) => {
    setTabValue(newValue);
  };

  const renderComponent = () => {
    switch (tabValue) {
      case 0:
        return <DashboardComponent />;
      case 1:
        return <ProfileComponent />;
    }
  };
  return (
    <div className={styles.main_cont}>
      <div className={styles.sidenav_cont}>
        <ul>
          <li onClick={() => setTabValue(0)}>
            <div className={styles.dash_items}>
              <MdOutlineSpaceDashboard size={20} />
              <p className={styles.item_title}>Dashboard</p>
            </div>
          </li>
          <li onClick={() => setTabValue(1)}>
            <div className={styles.dash_items}>
              <FaRegUserCircle size={20} />
              <p className={styles.item_title}>Profile</p>
            </div>
          </li>
          <li onClick={() => setTabValue(2)}>
            <div className={styles.dash_items}>
              <IoBagAddSharp size={20} />
              <p className={styles.item_title}>Add Props</p>
            </div>
          </li>
          <li onClick={() => setTabValue(3)}>
            <div className={styles.dash_items}>
              <MdEditNote size={25} />
              <p className={styles.item_title}>Edit Props</p>
            </div>
          </li>
          <li onClick={() => setTabValue(3)}>
            <div className={styles.dash_items}>
              <SiHomeassistantcommunitystore size={25} />
              <p className={styles.item_title}>Custom Builder </p>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.value_cont}>{renderComponent()}</div>
    </div>
  );
};

export default SideNav;
