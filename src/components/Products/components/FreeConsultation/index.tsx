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
      <div className={styles.img_back_cont}>
        <p className={styles.home_title}>Construct your dream 
        <br></br><span className={styles.hightlight}>house as you like</span> </p>
      </div>
      <div className={styles.contact_us_cont}>
        <form onSubmit={handleSubmit}>
          <h1 className={styles.title_cont}>Expert quotation, inquire now.</h1>
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
            <div className={styles.email_loc_cont}>
              <div className={styles.location}>
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
              <div className={styles.email_cont}>
                <label>Email</label>
                <input
                  type="tel"
                  value={phoneNo}
                  onChange={(e) => setPhoneNo(e.target.value)}
                  placeholder="Enter the email"
                />
              </div>
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
