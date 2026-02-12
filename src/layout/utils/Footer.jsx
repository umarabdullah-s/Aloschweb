import React from 'react'
import styles from './Footer.module.css'
import img from "@/assets/footer/logo.png"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.div1}>
          <div className={styles.divs}>
            <div className={styles.contact}>
              <div className={styles.contactus}>
                <p className={styles.title1}>Contact us</p>
                <p className={styles.num}>+91 99947 25508</p>
                <p className={styles.email}>contact@aloinfotech.in</p>
              </div>
              <div className={styles.location}>
                <p className={styles.title1}>Location</p>
                <p className={styles.num}>
                  Chunkankai Jn, Nagercoil,
                  <br /> Kanniyakumari,
                  <br /> 629001
                </p>
              </div>
            </div>
            <div className={styles.termsconditions}>
              <p className={styles.terms}>Terms & Conditions</p>
            </div>
          </div>
          <div className={`${styles.divs} ${styles.secondClass}`}>
            <div className={styles.imgdiv}>
              <div className={styles.img}>
                <img src={img.src} alt="img" />
              </div>
              <div className={styles.para}>
                <p>
                  Interested to discover how your business <br />
                  can achieve strategic outcomes with <br />
                  ALO Info-Tech? 
                </p>
              </div>
            </div>
            <div className={styles.copyright}>
              <p>
                © {new Date().getFullYear()} ALO School of Design & Technology.
                All rights reserved.
              </p>
            </div>
          </div>
          <div className={`${styles.divs} ${styles.thirdClass}`}>
            <div className={styles.links}>
              <p>About</p>
              <p>Service</p>
              <p>Carrers</p>
              <p>Contact</p>
            </div>
            <div className={styles.social}>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>
        <div className={styles.div2}>
          <p>LET’S LAUNCH YOUR JOURNEY</p>
        </div>
      </div>
    </div>
  );
}

export default Footer