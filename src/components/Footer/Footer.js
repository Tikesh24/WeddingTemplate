import styles from './Footer.module.scss';
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import {FaMailBulk} from 'react-icons/fa';
import {FaFly} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.icons}>
          <a href="https://react-portfolio-tikesh24.vercel.app" target="_blank"><FaFly /></a>
          <a href="https://www.instagram.com/tikeshv/" target="_blank"><FaInstagram /></a>
          <a href="https://www.facebook.com/tikeshv/" target="_blank"><FaFacebook /></a>
          <a href="https://twitter.com/VermaTikesh" target="_blank"><FaTwitter /></a>
          <a href="mailto:tikeshverma2494@gmail.com" target="_blank"><FaMailBulk /></a>
      </div>
    </footer>
  )
}

export default Footer;