import React from 'react'
import styles from './admissionprocedure.module.css'
import img from "@/assets/homepage/admissionprocedure/admissionprocedure.png";

const AdmissionProcedure = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>Admission Procedure</p>
          <p className={styles.para}>
            Start your UI/UX journey at ALO School of Design and Technology{" "}
            <br />
            in just a few simple steps.
          </p>
        </div>
        <div className={styles.content}>
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Application Submission
              </p>
              <p className={styles.para2}>
                Fill out the online application form by clicking Apply Now.
              </p>
            </div>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.cardcenter}`}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraRed}`}>
                Counseling Session
              </p>
              <p className={styles.para2}>
                After submitting your application, our admissions team will
                contact you for a free counseling session.
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Confirm Enrollment
              </p>
              <p className={styles.para2}>
                Secure your admission and kickstart your UI/UX journey with an
                orientation session.
              </p>
            </div>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdmissionProcedure