import React from 'react'
import styles from "./history.module.css"
import img from "@/assets/aboutpage/ourhistory.jpg"


const History = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={img.src} alt="img" />
      </div>
      <div className={styles.content}>
        <p>
          After immersing myself in the culture and developing my own learning
          techniques, I became fluent in just 18 months. This experience
          inspired me to create a learning system that combines cultural
          context, practical usage, and an immersive approach.
        </p>
        <p>
          After immersing myself in the culture and developing my own learning
          techniques, I became fluent in just 18 months. This experience
          inspired me to create a learning system that combines cultural
          context, practical usage, and an immersive approach.
        </p>
      </div>
    </div>
  );
}

export default History