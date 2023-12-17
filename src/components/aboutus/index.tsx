import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';

const Aboutus = () => {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.headerTitle}`}>
        <h1 className={`${styles.title}`}>
        We Excel at Discovering Fantastic Homes For   <br /> Our Clients.
        </h1>
      </div>
      <div className={`${styles.heroSection}`}>
        <div className={`${styles.desc}`}>
          <h1 className={`${styles.title}`}>
            DREAMCASA
            <br />
            <div className={`${styles.lining}`} />
          </h1>
          <h1 className={`${styles.title}`}>Since 2020</h1>
          <p className={`${styles.description}`}>
            One of the Top RealEstate Channel Partner firm in Hyderabad
          </p>
        </div>
      </div>
      <div className={`${styles.more}`}>
        <h1 className={`${styles.title}`}>DREAMCASA</h1>
        <p className={`${styles.moreInfo}`}>
          Dreamcasa is a full-service real estate brokerage firm that
          specializes in buying, selling, and renting residential and commercial
          properties. Our team of experienced and knowledgeable real estate
          agents are committed to providing our clients with exceptional service
          and support throughout the entire real estate process. Whether you are
          a first-time homebuyer or a seasoned real estate investor, we are here
          to help you achieve your real estate goals. We understand that buying
          or selling a property can be a complex and overwhelming process, which
          is why we are dedicated to providing you with expert guidance and
          personalized attention every step of the way. At Dreamcasa, we are
          proud to offer a wide range of real estate services, including
          property marketing, property search, negotiation, closing, and more.
          Our mission is to make the real estate process as smooth and
          stress-free as possible for our clients, while ensuring that they get
          the best possible deal.
        </p>
      </div>
      <div className={`${styles.team}`}>
        <h1 className={`${styles.teamHeading}`}>MEET OUR TEAM</h1>
      </div>
    </div>
  );
};

export default Aboutus;
