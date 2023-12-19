import React from 'react';
import Link from 'next/link';
import styles from './index.module.scss';
import Avatar from '@mui/material/Avatar';
import Image from 'next/image';
import { Button } from '@mui/material';

const Navbar = () => {
  return (
    <div className={styles.navbar_main}>
      <div className={styles.navbar_logo}>
        <div className={styles.animation_container}>
          <Image
            src="/images/logo.png"
            alt="logo_animation"
            layout="fill"
            objectFit="cover"
            className={styles.img}
          />
        </div>
        <div className={styles.test}>
          <p className={styles.title}>DREAMCASA</p>
          <p className={styles.tag}>Right key to Dream key</p>
        </div>
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
        <Link href="/contact">
          <div className={styles.navbar_items}>Contact Us</div>
        </Link>
        <Link href="/about">
          <div className={styles.navbar_items}>About Us</div>
        </Link>
      </div>
      <div className={styles.login_touch_btn}>
        <div className={styles.btn_container}>
          <button className={styles.btn}>Login</button>
        </div>
        <div>
          <Button
            color="info"
            variant="outlined"
            sx={{
              fontWeight: 700,
              color: 'white',
      height:"42px",
              '&:hover': {
                backgroundColor: 'white',
                color: 'black',
              },
            }}
          >
            GET IN TOUCH
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
