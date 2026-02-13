import React from 'react'
import styles from "./studentportfolio.module.css"
import img from "@/assets/program/studentportfolio/studentportfolio.png"
import img1 from "@/assets/program/studentportfolio/profileimg.jpg";
import { FaBehance } from "react-icons/fa";


const StudentPortfolio = () => {
  return (
    <div data-aos="fade-up" className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>Students Portfolio</p>
          <p className={styles.para}>
            Start your UI/UX journey at ALO School of Design and Technology
            <br />
            in just a few simple steps.
          </p>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <div className={styles.profile}>
                <div className={styles.profileimg}>
                  <img src={img1.src} alt="img" />
                </div>
                <div className={styles.profilename}>
                  <p className={styles.name1}>Ashan Akthar</p>
                  <p className={styles.name2}>UI/UX Designer</p>
                </div>
              </div>
              <div className={styles.profilelink}>
                <FaBehance className={styles.behanceIcon} />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <div className={styles.profile}>
                <div className={styles.profileimg}>
                  <img src={img1.src} alt="img" />
                </div>
                <div className={styles.profilename}>
                  <p className={styles.name1}>Ashan Akthar</p>
                  <p className={styles.name2}>UI/UX Designer</p>
                </div>
              </div>
              <div className={styles.profilelink}>
                <FaBehance className={styles.behanceIcon} />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <div className={styles.profile}>
                <div className={styles.profileimg}>
                  <img src={img1.src} alt="img" />
                </div>
                <div className={styles.profilename}>
                  <p className={styles.name1}>Ashan Akthar</p>
                  <p className={styles.name2}>UI/UX Designer</p>
                </div>
              </div>
              <div className={styles.profilelink}>
                <FaBehance className={styles.behanceIcon} />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <div className={styles.profile}>
                <div className={styles.profileimg}>
                  <img src={img1.src} alt="img" />
                </div>
                <div className={styles.profilename}>
                  <p className={styles.name1}>Ashan Akthar</p>
                  <p className={styles.name2}>UI/UX Designer</p>
                </div>
              </div>
              <div className={styles.profilelink}>
                <FaBehance className={styles.behanceIcon} />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <div className={styles.profile}>
                <div className={styles.profileimg}>
                  <img src={img1.src} alt="img" />
                </div>
                <div className={styles.profilename}>
                  <p className={styles.name1}>Ashan Akthar</p>
                  <p className={styles.name2}>UI/UX Designer</p>
                </div>
              </div>
              <div className={styles.profilelink}>
                <FaBehance className={styles.behanceIcon} />
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles.img}>
              <img src={img.src} alt="img" />
            </div>
            <div className={styles.desc}>
              <div className={styles.profile}>
                <div className={styles.profileimg}>
                  <img src={img1.src} alt="img" />
                </div>
                <div className={styles.profilename}>
                  <p className={styles.name1}>Ashan Akthar</p>
                  <p className={styles.name2}>UI/UX Designer</p>
                </div>
              </div>
              <div className={styles.profilelink}>
                <FaBehance className={styles.behanceIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentPortfolio
