import React from 'react';
import styles from './index.module.scss';
import Layout from '../../components/Layout';

const ContactUs = () => {
  const handleFormSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <div className={styles.main_cont}>
      <div className={styles.text_cont}>
        <p className={styles.title}>
          DREAM<span className={styles.casa}>CASA</span>{' '}
        </p>
        <p className={styles.desc}>
          DreamCasa is a full-service real estate brokerage firm that
          specializes in buying, selling, and renting residential and commercial
          properties. Our team of experienced and knowledgeable real estate
          agents are committed to providing our clients with exceptional service
          and support throughout the entire real estate process. Whether you are
          a first-time homebuyer or a seasoned real estate investor, we are here
          to help you achieve your real estate goals. We understand that buying
          or selling a property can be a complex and overwhelming process, which
          is why we are dedicated to providing you with expert guidance and
          personalized attention every step of the way.
        </p>
      </div>
      <div className={styles.form_main}>
        <h2 className={styles.title}> CONTACT US</h2>
        <div className={styles.form_cont}>
          <form onSubmit={handleFormSubmit}>
            <div>
              <label htmlFor="firstName">First Name:</label>
              <input type="text" id="firstName" name="firstName" required />
            </div>
            <div>
              <label htmlFor="lastName">Last Name:</label>
              <input type="text" id="lastName" name="lastName" required />
            </div>
            <div>
              <label htmlFor="contactDetails">Contact Details:</label>
              <input
                type="text"
                id="contactDetails"
                name="contactDetails"
                required
              />
            </div>
            <div>
              <label htmlFor="Email">Email:</label>
              <input type="text" id="Email" name="email" required />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
