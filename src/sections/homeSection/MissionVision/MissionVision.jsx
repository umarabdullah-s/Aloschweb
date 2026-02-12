import React from 'react'
import styles from './missionVision.module.css'
import img from "@/assets/homepage/missionvision/missionvision.png"

const MissionVision = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          <p className={styles.para}>
            South Tamil Nadu’s 1st Elite <br />
            Design & Technology <br />
            College
          </p>
        </div>
        <div className={styles.content}>
          <div className={`${styles.missionvision} ${styles.left}`}>
            <p className={styles.paras}>Mission</p>
            <p className={styles.desc}>
              After immersing myself in the culture and developing my own
              learning techniques, I became fluent in just 18 months. This
              experience inspired me to create a learning system that combines
              cultural context, practical usage, and an immersive approach.
            </p>
          </div>
          <div className={styles.img}>
            <div className={styles.imgdiv}>
              <img src={img.src} alt="" />
            </div>
            <div className={styles.circle}>
              <div className={styles.dot}></div>
              <div className={styles.btn}>More about ALO</div>
            </div>
          </div>

          <div className={`${styles.missionvision} ${styles.right}`}>
            <p className={styles.paras}>Vision</p>
            <p className={styles.desc}>
              After immersing myself in the culture and developing my own
              learning techniques, I became fluent in just 18 months. This
              experience inspired me to create a learning system that combines
              cultural context, practical usage, and an immersive approach.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MissionVision