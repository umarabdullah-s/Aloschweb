import React from 'react'
import styles from './studentsays.module.css'
import img1 from "@/assets/homepage/studentsays/img1.jpg";  
import img2 from "@/assets/homepage/studentsays/img2.jpg";
import img3 from "@/assets/homepage/studentsays/img3.jpg";
import img4 from "@/assets/homepage/studentsays/img4.jpg";

const StudentSays = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p className={styles.para}>
            What Our Students <br /> Say
          </p>
        </div>
        <div className={styles.cards}>
          <div className={`${styles.card} ${styles.card1}`}>
            <div className={`${styles.content}`}>
              <p className={styles.para1}>
                “ALO School of Design and Technology gave me a clear
                understanding of UI/UX from basics to advanced. The hands-on
                projects helped me build a strong portfolio and gain real
                industry confidence.”
              </p>
              <p className={styles.para2}>Nafeel</p>
              <p className={styles.para3}>UI/UX Student</p>
            </div>
            <div className={styles.img}>
              <img src={img1.src} alt="" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.card2}`}>
            <div className={`${styles.content}`}>
              <p className={styles.para1}>
                “ALO School of Design and Technology gave me a clear
                understanding of UI/UX from basics to advanced. The hands-on
                projects helped me build a strong portfolio and gain real
                industry confidence.”
              </p>
              <p className={styles.para2}>Nafeel</p>
              <p className={styles.para3}>UI/UX Student</p>
            </div>
            <div className={styles.img}>
              <img src={img2.src} alt="" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.card3}`}>
            <div className={`${styles.content}`}>
              <p className={styles.para1}>
                “ALO School of Design and Technology gave me a clear
                understanding of UI/UX from basics to advanced. The hands-on
                projects helped me build a strong portfolio and gain real
                industry confidence.”
              </p>
              <p className={styles.para2}>Nafeel</p>
              <p className={styles.para3}>UI/UX Student</p>
            </div>
            <div className={styles.img}>
              <img src={img3.src} alt="" />
            </div>
          </div>
          <div className={`${styles.card} ${styles.card4}`}>
            <div className={`${styles.content}`}>
              <p className={styles.para1}>
                “ALO School of Design and Technology gave me a clear
                understanding of UI/UX from basics to advanced. The hands-on
                projects helped me build a strong portfolio and gain real
                industry confidence.”
              </p>
              <p className={styles.para2}>Nafeel</p>
              <p className={styles.para3}>UI/UX Student</p>
            </div>
            <div className={styles.img}>
              <img src={img4.src} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSays