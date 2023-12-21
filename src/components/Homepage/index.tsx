import React from 'react';
import ContentBar from '../Contentbar';
import styles from './index.module.scss';
import FeatureComponent from '../FeatureComponet';
import Legacy from '../legacy';
import WorkFlow from '../WorkFlow';
import CustomerReviews from '../review';
import FeaturedProps from '../FeaturedProps';
import BlogsComponent from '../blogs';
import { useRouter } from 'next/router';
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';

const Homepage = () => {
  const router = useRouter();
  const handleLink = () => {
    router.push('https://www.youtube.com/@dreamcasarealestate');
  };
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
            <li className={`${styles.li_item} ${styles.item1}`}>
              <a href="https://www.instagram.com/dreamcasarealestates/?igsh=YzVkODRmOTdmMw%3D%3D" target='_blank'>
                Instagm <FaInstagram size={30} />
              </a>
            </li>
            <li className={styles.li_item} onClick={handleLink}>
              <a href="https://www.youtube.com/@dreamcasarealestate" target='_blank'>
                YouTube <FaYoutube size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="https://www.linkedin.com/in/sachin-chavan-425615208/" target='_blank'>
                LinkedIn <FaLinkedin size={30} />
              </a>
            </li>
            <li className={styles.li_item}>
              <a href="mailto:lavudyasachinchavan@gmail.com" target='_blank'>
                Gmail <MdOutgoingMail size={30} />
              </a>
            </li>

            <li className={`${styles.li_item} ${styles.item}`}>
              <a href="http://wa.me/+918639820425" target='_blank'>
                whatsap <FaWhatsapp size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Homepage;
