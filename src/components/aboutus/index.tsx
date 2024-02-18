import React from 'react';
import styles from './index.module.scss';
import Link from 'next/link';
import Image from 'next/legacy/image';

const Aboutus = () => {
  return (
    <div className={`${styles.main}`}>
      <div className={`${styles.headerTitle}`}>
        <h1 className={`${styles.title}`}>
          WE EXCEL AT DISCOVERING FANTASTIC HOMES FOR
          <br /> OUR CLIENTS.
        </h1>
      </div>
      <div className={`${styles.heroSection}`}>
        <div className={`${styles.desc}`}>
          <h1 className={`${styles.title}`}>
            DREAMCASA
            <br />
            <div className={`${styles.lining}`} />
          </h1>
          <h1 className={`${styles.title}`}>SINCE 2019</h1>
          <p className={`${styles.description}`}>
            ONE OF THE TOP REALESTATE Property listing FIRM IN HYDERABAD
          </p>
        </div>
      </div>
      <div className={`${styles.more}`}>
        <h1 className={`${styles.title}`}>DREAMCASA</h1>
        <p className={`${styles.moreInfo}`}>
          Dreamcasa is a full-service Real estate one-stop solution for your dreamhome firm that
          specializes in buying, selling, and renting residential and commercial
          properties and lands ,furnitures(interior) required for your dream home. Our team of experienced and knowledgeable real estate
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
        <div className={styles.team_cont}>
          <div className={styles.img_main_cont}>
            <div className={styles.img_container}>
              <Image
                src="/images/team/founder.jpg"
                alt="founder_pic"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2>SACHIN CHAVAN</h2>
            <p>FOUNDER - <span>DreamCasa Pvt Limited</span></p>
          </div>
          <div className={styles.message_desc}>
            <p className={styles.Message}>Our Founder Message :</p>
            <p className={styles.founder_desc}>
              As the CEO of our dynamic Property Listing Property in the realm of
              RealEstate, I bring to the table four years of invaluable
              experience navigating the intricate landscape of property
              investment. My passion lies in unlocking the immense potential of
              lands and charting a course toward a prosperous future in real
              estate. I firmly believe that real estate isnt just about
              transactions its about building dreams and securing futures.
              With a keen eye for lucrative investments, 
              
            </p>
          </div>
        </div>
        <div className={styles.team_cont_1}>
          <div className={styles.message_desc}>
          <p className={styles.Message}>Our CO-Founder Message :</p>
          <p className={styles.founder_desc}>
            As the Co-founder of our  Property listing website in the realm of
            real estate, I bring to the table four years of invaluable
            experience navigating the intricate landscape of property
            investment. My passion lies in unlocking the immense potential of
            lands and charting a course toward a prosperous future in real
            estate. I firmly believe that real estate isnt just about
            transactions.
            
          </p>
          </div>
          <div className={styles.img_main_cont}>
            <div className={styles.img_container}>
              <Image
                src="/images/team/co-founder.jpeg"
                alt="founder_pic"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2>MAHESH KAMMARI</h2>
            <p>CO-FOUNDER <span>DreamCasa Pvt Limited</span></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
