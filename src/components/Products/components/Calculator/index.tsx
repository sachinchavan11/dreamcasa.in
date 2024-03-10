import React, { useState } from 'react';
import styles from './index.module.scss';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { MenuItem, Select } from '@mui/material';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Calculator = () => {
  const [area, setArea] = useState('');
  const [balcony, setBalcony] = useState(1);
  const [selectedCity, setSelectedCity] = useState('');

  const handleAreaChange = (e: any) => {
    const newValue = e.target.value;
    setArea(newValue);
  };

  const handleBalconyChange = (e: any, value: any) => {
    setBalcony(value);
  };

  const handleCityChange = (event: any) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className={styles.main_cont}>
      <div className={styles.cal_item}>
        <div className={styles.sft_cont}>
          <p className={styles.type_cont}>House Area(sq.ft)</p>
          <div>
            <input type="text" value={area} onChange={handleAreaChange} />
          </div>
        </div>
        <div>
          <Box sx={{ maxWidth: 730 }}>
            <Slider
              value={Number(area)}
              min={700}
              max={4000}
              onChange={handleAreaChange}
              aria-label="Default"
              valueLabelDisplay="on"
              sx={{
                '& .MuiSlider-track': {
                  backgroundColor: 'black',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: 'gray',
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: '#6DD5EA',
                },
              }}
            />
          </Box>
        </div>
      </div>
      <div className={styles.cal_item}>
        <div className={styles.sft_cont}>
          <p className={styles.type_cont}>Balcony and Utility (eg:1)</p>
          <div>
            <input
              type="text"
              value={balcony}
              onChange={(e: any) => setBalcony(e.target.value)}
            />
          </div>
        </div>
        <div>
          <Box sx={{ width: 730 }}>
            <Slider
              value={balcony}
              min={1}
              max={10}
              aria-label="Default"
              valueLabelDisplay="on"
              sx={{
                '& .MuiSlider-track': {
                  backgroundColor: 'black',
                },
                '& .MuiSlider-rail': {
                  backgroundColor: 'gray',
                },
                '& .MuiSlider-thumb': {
                  backgroundColor: '#6DD5EA',
                },
              }}
              onChange={handleBalconyChange}
            />
          </Box>
        </div>
      </div>
      <div className={styles.cal_item}>
        <div className={styles.sft_cont}>
          <p className={styles.type_cont}>Select City</p>
          <div>
            <Select
              value={selectedCity}
              onChange={handleCityChange}
              style={{ width: 200, height: 45 }}
            >
              <MenuItem value="">Select a City</MenuItem>
              <MenuItem value="delhi">Hyderabad</MenuItem>
              <MenuItem value="mumbai">Mumbai</MenuItem>
              <MenuItem value="chennai">Pune</MenuItem>
              <MenuItem value="chennai">Bangalore</MenuItem>
            </Select>
          </div>
        </div>
      </div>
      <div className={styles.btn_wrap}>
        <Button
          variant="contained"
          className={styles.btn_cont}
          endIcon={<ArrowForwardIcon />}
        >
          Estimate cost
        </Button>
      </div>
      <div className={styles.cost_container}>
        <p className={styles.total}>Total estimated cost : </p>
        <p className={styles.total}>2000000</p>
      </div>
    </div>
  );
};

export default Calculator;
