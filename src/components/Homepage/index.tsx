import React from 'react';
import ContentBar from '../Contentbar';
import styles from './index.module.scss';
import FeatureComponent from '../FeatureComponet';
import Legacy from '../legacy';
import WorkFlow from '../WorkFlow';
import CustomerReviews from '../review';
import FeaturedProps from '../FeaturedProps';
import BlogsComponent from '../blogs';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaPhone,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Homepage = () => {
  return (
    <>
      <div className={styles.main_container}>
        <div className={styles.sub_cont}>
          <ContentBar />
        </div>
        <FeaturedProps />
        <FeatureComponent />
        <WorkFlow />
        <CustomerReviews />
        <Legacy />
        <BlogsComponent />
        <div className={styles.contact_cont}>
          <ul className="">
            <li className={styles.li_item}>
              <a href="https://www.instagram.com/thesachinchavan_/">
                Phone <FaPhone size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="https://drive.google.com/file/d/1qZCMGzFJCFEchCoWA_JSEOcDuVx86GU1/view?usp=drive_link">
                YouTube <FaYoutube size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="https://www.linkedin.com/in/sachin-chavan-425615208/">
                Linked <FaLinkedin size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="mailto:lavudyasachinchavan@gmail.com">
                Gmail <HiOutlineMail size={30} />
              </a>
            </li>

            <li className={styles.li_item}>
              <a href="https://github.com/sachinchavan11">
                Github <FaGithub size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;
