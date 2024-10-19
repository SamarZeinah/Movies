
import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../../assets/tmovie.png';
import styles from './Footer.module.css';

const { Logoimg, FooterContainer } = styles;

const Footer = () => {
  return (
    <div className={FooterContainer}>
      <div className={Logoimg}>
        <img src={Logo} width={30} height={30} alt="tMovies Logo" />
        <Link to="/">tMovies</Link>
      </div>
      <div className={styles.contactUs}>Contact Us</div>
    </div>
  );
}

export default Footer;
