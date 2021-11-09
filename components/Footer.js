import React from "react";
import styles from "../styles/Footer.module.css";
import Link from "next/link";
// import { Location } from "./Location";
import logo from '../Assets/cars/covers/benz.png'  
import Image from 'next/image'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


function Footer() {
  return (
    <footer className={styles.footer}>
      
      <div className={styles.col}>
      <h1 className={styles.title}>EDUMART</h1>
       <div className={styles.button}>
       <button className={styles.btn1}>SELECT</button>
        <button className={styles.btn}>BUY</button>
       </div>
      </div>
      <div className={styles.container}>
        <div className={styles.col1}>
          <h3 className={styles.title}>Nagivation</h3>
          <div>
            <ul className={styles.links}>
              <Link href="/">Home</Link>
              <Link href="/partners">Partners</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/">Buy</Link>
            </ul>
          </div>
        </div>
        <div className={styles.col2}>
          <h3 className={styles.title}>legalPolicy</h3>
          <div>
            <ul className={styles.links}>
              <a>General Information</a>
              <a>Privacy Policy</a>
              <a>Terms of Use</a>
            </ul>
          </div>
        </div>
        <div className={styles.col3}>
          <h3 className={styles.title}>Location </h3>
          <div style={{display:"flex" , flexDirection:"column" ,justifyContent:"center" , alignItems:"center"}}>
            <span style={{fontFamily:"Times New Roman" , fontSize:"1.2rem"}}>Kampala Uganda </span>
            <span style={{fontFamily:"Times New Roman", fontSize:"1.2rem"}}>+256 788 888 888</span>
            <span style={{fontFamily:"Times New Roman", fontSize:"1.2rem"}}>Jinja Road Spear House</span>
          </div>
    
        </div>
      </div>
      <div className={styles.copyright}>
        <div>
          <Image src="/images/logo.jpg" height="100px" width="100px" alt="benzlogo" className ={styles.img}/>
        </div>
        <div>
          <p>Copyright © 2021 Driveyourdream. All rights reserved.</p>
        </div>
        <div className={styles.media}>
          <FacebookIcon className={styles.icon}/>
          <InstagramIcon className={styles.icon} />
          <TwitterIcon className={styles.icon}/>
          <LinkedInIcon className={styles.icon}/>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
