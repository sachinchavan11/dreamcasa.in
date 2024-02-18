import React, { useState } from 'react';
import styles from './index.module.scss';

const FreeConsultation = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Phone Number:', phoneNo);
  };

  return (
    <div className={styles.main_container}>
      <div>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title_cont}>GET A FREE CONSULTATION</h1>
          <div className={styles.input_cont}>
            <label>Name</label>
            <div className={styles.input_cont}>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter the name"
              />
            </div>
          </div>

          <div className={styles.input_cont}>
            <label>Phone Number</label>
            <div className={styles.input_cont}>
              <input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter the phone number"
              />
            </div>
          </div>
          <div className={styles.input_cont}>
            <label>Construction Requirements</label>
            <div className={styles.input_cont}>
              <input
                type="tel"
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                placeholder="Enter the construction Requirements"
              />
            </div>
          </div>
          <div className={styles.input_cont}>
            <label>Location</label>
            <div className={styles.location_cont}>
              <select>
                <option>Hyderabad</option>
                <option>Secundrabad</option>
                <option>Pune</option>
                <option>Mumbai</option>
              </select>
            </div>
          </div>
          <div className={styles.btn_container}>
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FreeConsultation;
