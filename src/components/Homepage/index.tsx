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
import { MdOutgoingMail } from 'react-icons/md';

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
          <ul>
            <li className={styles.li_item}>
              <a href="https://www.instagram.com/thesachinchavan_/">
                Phone <FaPhone size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="https://youtube.com/@dreamcasarealestate?si=Xdeax2sM649KazJo">
                YouTube <FaYoutube size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="https://www.linkedin.com/in/sachin-chavan-425615208/">
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="mailto:lavudyasachinchavan@gmail.com">
                Gmail <MdOutgoingMail size={30} />
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
