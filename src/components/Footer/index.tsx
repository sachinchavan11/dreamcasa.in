import React from 'react';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Facebook } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import styles from './index.module.scss';

const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.list_cont}>
        <div>
          <h2 className={styles.title_cont}>CONTACT US:</h2>
          <div className={styles.item_cont}>
            <div className="">
              <span className="">
                <LocalPhoneIcon /> Between 9AM to 9PM :
              </span>
              <p className={styles.bold}>8639820425</p>
            </div>
            <div className={''}>
              <div>
                <span className="">
                  <WhatsAppIcon /> Whatsapp Message at :
                </span>
                <p className={styles.bold}>8639820425</p>
              </div>
            </div>
            <div className="">
              <div>
                <span className="">
                  <EmailIcon /> Email us at :
                </span>
                <p className={styles.bold}>dreamcasarealestates@gmail.com</p>
              </div>
            </div>
            <div>
              <span className="">
                <LocationOnIcon /> Cooperate office:
              </span>
              <p className={styles.bold}>Gowra fountainhead ,Madhapur, Hyderabad ,Telangana</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className={styles.title_cont}>DREAMCASA</h2>
          <ul className="">
            <li>Home</li>
            <li>Properties</li>
            <li>Blogs</li>
            <li>Contact Us</li>
            <li>About us</li>
            <li>Career</li>
            <li>Refer us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <h2 className={styles.title_cont}>FOLLOW US</h2>
          <ul className="text-[16px] font-normal">
            <li className="mb-2">
              <FacebookIcon /> Facebook
            </li>
            <li className="mb-[6px]">
              <TwitterIcon />
              Twitter
            </li>
            <li className="mb-[6px]">
              <YouTubeIcon /> Youtube
            </li>
            <li className="mb-[6px]">
              <InstagramIcon /> Instagram
            </li>
            <li className="mb-[6px]">
              <LinkedInIcon /> LinkedIn
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.horiz_line}></div>
      <div className={styles.Copyrights}>
        ©2023 All Copyrights are Reserved to DreamCasa Pvt limited.
      </div>
    </div>
  );
};

export default Footer;
