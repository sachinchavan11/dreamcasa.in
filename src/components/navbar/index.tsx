import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className={styles.navbar_main}>
      <div className={styles.navbar_logo}>
        <div className={styles.animation_container}>
          <Image
            src="/gifs/logoanimation.gif"
            alt="logo_animation"
            layout="fill"
            objectFit="cover"
            className={styles.img}
          />
        </div>
        <p className={styles.title}>DREAMCASA</p>
      </div>
      <div className={styles.navbar_cont}>
        <Link href="/">
          <div className={styles.navbar_items}>Home</div>
        </Link>
        <Link href="/properties">
          <div className={styles.navbar_items}>Properties</div>
        </Link>
        <Link href="/blogs">
          <div className={styles.navbar_items}>Blogs</div>
        </Link>
        <Link href="/career">
          <div className={styles.navbar_items}>Refer Us</div>
        </Link>
        <Link href="/aboutus">
          <div className={styles.navbar_items}>About Us</div>
        </Link>
      </div>
      <div className={styles.btn_container}>
        <button className={styles.btn}>Login</button>
      </div>
    </div>
  );
};

export default Navbar;
