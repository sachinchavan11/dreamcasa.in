import React from 'react';
import styles from './index.module.scss';
import Image from 'next/legacy/image';
import Link from 'next/link';

const ContactCard = ({ name, image }: any) => {
  return (
    <div className={`${styles.cardContainer}`}>
      <Image
        className={`${styles.avatar}`}
        src={image}
        alt="cofounder"
        width={300}
        height={300}
      />
      <div className={`${styles.details}`}>
        <h3>Co founder and CEO</h3>
        <h1>{name}</h1>
        <p>
          Meet {name}, the visionary co-founder of DreamCasa, a trailblazing
          tech platform. With a passion for innovation and a keen business
          acumen, {name} has played a pivotal role in driving DreamCasa #apos; s
          success.
        </p>
        <div className={`${styles.links}`}>
          <Link href={'/fb.com'}>
            <div className={`${styles.links}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="16" height="16" x="4" y="4" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.5"></line>
              </svg>
            </div>
          </Link>
          <Link href={'/fb.com'}>
            <div className={`${styles.links}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="16" height="16" x="4" y="4" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.5"></line>
              </svg>
            </div>
          </Link>
          <Link href={'/fb.com'}>
            <div className={`${styles.links}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="16" height="16" x="4" y="4" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.5"></line>
              </svg>
            </div>
          </Link>
          <Link href={'/fb.com'}>
            <div className={`${styles.links}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <rect width="16" height="16" x="4" y="4" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.5"></line>
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
