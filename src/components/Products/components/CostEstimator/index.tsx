import React, { useState } from 'react';
import styles from './index.module.scss';
import Image from 'next/image'; // corrected import
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel'; // added TabPanel import
import { Box } from '@mui/material';
import Calculator from '../Calculator';

const CostEstimator = () => {
  const [value, setValue] = useState(0); // added state for Tabs value

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.main_container}>
      <p className={styles.title_cont}>House Construction Cost Estimator</p>
      <p className={styles.desc_cont}>
        Complete the form below to receive an approximate cost estimate for
        building your house. For a more precise pricing evaluation, consult with
        our technical expert.
      </p>
      <div className={styles.cost_esti_cont}>
        <div className={styles.img_cont}>
          <div className={styles.img_cal_cont}>
            <Image
              src="/images/background/calculator.jpg"
              alt=""
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.calculator_cont}>
          <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <TabList onChange={handleChange} aria-label="calculator">
                  <Tab label="Basic Package" value="1" />
                  <Tab label="Classic Package" value="2" />
                  <Tab label="Premium Package" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Calculator />
              </TabPanel>
              <TabPanel value="2">
                <Calculator />
              </TabPanel>
              <TabPanel value="3">Content for Item Three</TabPanel>
            </TabContext>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CostEstimator;
