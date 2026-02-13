import React from 'react'
import styles from "./programstructure.module.css"
import img from "@/assets/program/programstructure/programstructure.png"

const ProgramStructure = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>Program Structure</p>
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
                Concept sessions with practical demonstrations
              </p>
              <p className={styles.para2}>
                Core design and technology concepts are explained through clear,
                structured sessions supported by live demonstrations
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
                Real-world case studies
              </p>
              <p className={styles.para2}>
                Students analyze and solve real-world design problems based on
                actual products and user scenarios
              </p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.desc}>
              <p className={`${styles.para1} ${styles.paraGreen}`}>
                Live projects and portfolio building
              </p>
              <p className={styles.para2}>
                Live projects and portfolio building
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

export default ProgramStructure