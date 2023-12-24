import React from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import {
  FaLinkedin,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
} from 'react-icons/fa';
import { MdOutgoingMail } from 'react-icons/md';
import BlogsComponentCard from '../BlogComponentCard';

const data = [
  {
    title: 'Ultra Luxury vs Luxury Apartments – Everything You Need to Know',
    desc: 'Who doesn’t love a touch of luxury in homes? Today potential homebuyers look for homes that offer something beyond the basic needs. The world of luxury living is growing and expanding ever...',
  },
  {
    title: 'Top 10 Advantages of Buying Your Home From A Reputed Builder',
    desc: 'There are so many things to think about when you buy a home. It won’t be any random space for a temporary stay, but a space where you will reside forever. So you must ensure that a home, e...',
  },
  {
    title: 'Safe Investment Plans for NRI’s in Kerala Real Estate',
    desc: 'Kerala Real Estate is booming at a great pace in India, especially in Kerala. It’s not just the lush green landscapes that are attracting people from all over the world but the returns it ...',
  },
  {
    title: 'Apartment Gardening – Tips and Ideas for Beginners',
    desc: 'A garden is the true beauty of any home because it gives a touch of nature wherever you reside be it away from the city or living amidst the city lights. People staying in the city often mis..',
  },
  {
    title: 'What Is A Certificate Of Occupancy & Why It Is Important?',
    desc: 'Imagine you’ve finally bought your dream home and the excitement has no bounds. You can’t wait to start a brand new journey where you will move in, start shopping and make arrangements in your new home. But wait! Have you heard of the certificate of occupancy? A certificate of occupancy is the crux of a real estate property. Local authorities issue occupancy certificates upon a property’s readiness for occupancy.',
  },
  {
    title: 'Is Investing Under Construction Flats Beneficial?',
    desc: 'Real estate has been a scorching topic these days. Ever since the pandemic, the real estate industry has soared to its might with new trends and architectural brilliance that have adorned th..',
  },
];
const BlogsHero = () => {
  return (
    <div className={styles.blog_main}>
      <div className={styles.image_cont}>
        <Image
          src="/images/background/blogshero.jpg"
          alt="hero_section_blog"
          layout="fill"
          objectFit="cover"
          objectPosition="top"
        />
      </div>
      <p className={styles.subtitle}>OUR RECENT BLOGS</p>
      <p className={styles.desc}>
        Explore our latest blog posts to stay informed about industry trends and
        strategies for successful channel partnering.
      </p>
      <div className={styles.cards_comp}>
        {data.map((item: any, index: any) => {
          return (
            <>
              <BlogsComponentCard
                title={item.title}
                desc={item.desc}
                index={index}
              />
            </>
          );
        })}
      </div>
      <div className={styles.contact_cont}>
        <ul>
          <li className={`${styles.li_item} ${styles.item1}`}>
            <a
              href="https://www.instagram.com/dreamcasarealestates/?igsh=YzVkODRmOTdmMw%3D%3D"
              target="_blank"
            >
              Instagm <FaInstagram size={30} />
            </a>
          </li>
          <li className={styles.li_item}>
            <a
              href="https://www.youtube.com/@dreamcasarealestate"
              target="_blank"
            >
              YouTube <FaYoutube size={30} />
            </a>
          </li>
          <li className={styles.li_item}>
            <a
              href="https://www.linkedin.com/in/sachin-chavan-425615208/"
              target="_blank"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className={styles.li_item}>
            <a href="mailto:lavudyasachinchavan@gmail.com" target="_blank">
              Gmail <MdOutgoingMail size={30} />
            </a>
          </li>

          <li className={`${styles.li_item} ${styles.item}`}>
            <a href="http://wa.me/+918639820425" target="_blank">
              whatsap <FaWhatsapp size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BlogsHero;
