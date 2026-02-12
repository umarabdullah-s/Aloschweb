
import React from "react";
import img1 from "@/assets/aboutpage/team1.png";
import img2 from "@/assets/aboutpage/team2.png";
import { FaLinkedinIn } from "react-icons/fa";
import styles from "./team.module.css";

const teamMembers = [
  {
    name: "Natarajan",
    role: "CEO & Founder ALO Groups",

    linkedin: "#",
  },
  {
    name: "Natarajan",
    role: "CEO & Founder ALO Groups",

    linkedin: "#",
  },
];

const Team = () => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={img1.src} alt="" />
        </div>
        <div className={styles.intro}>
          <p className={styles.name}>Natrajan</p>
          <p className={styles.designation}>CEO & Founder ALO Groups</p>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBox}
          >
            <FaLinkedinIn className={styles.linkedinIcon} />
          </a>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.img}>
          <img src={img2.src} alt="" />
        </div>
        <div className={styles.intro}>
          <p className={styles.name}>Natrajan</p>
          <p className={styles.designation}>CEO & Founder ALO Groups</p>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinBox}
          >
            <FaLinkedinIn className={styles.linkedinIcon} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Team; 
