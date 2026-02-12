import React, { useState } from "react";
import styles from "./campuslife.module.css";

const campusData = [
  {
    id: 1,
    eventName: "Pongal 2k26",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 1}`,
    ),
  },
  {
    id: 2,
    eventName: "Sports Day",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 20}`,
    ),
  },
  {
    id: 3,
    eventName: "Diwali",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 40}`,
    ),
  },
  {
    id: 4,
    eventName: "Onam",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 60}`,
    ),
  },
  {
    id: 5,
    eventName: "Graduation",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 80}`,
    ),
  },
  {
    id: 6,
    eventName: "Culturals",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 100}`,
    ),
  },
  {
    id: 7,
    eventName: "Workshop",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 120}`,
    ),
  },
  {
    id: 8,
    eventName: "Hackathon",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 140}`,
    ),
  },
  {
    id: 9,
    eventName: "Farewell",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 160}`,
    ),
  },
  {
    id: 10,
    eventName: "Freshers",
    images: Array.from(
      { length: 10 },
      (_, i) => `https://picsum.photos/400/300?random=${i + 180}`,
    ),
  },
];

const CampusLife = () => {
  const [activeTab, setActiveTab] = useState(campusData[0]);
  const [visibleCount, setVisibleCount] = useState(6);

  const handleTabClick = (tab, e) => {
    setActiveTab(tab);
    setVisibleCount(6);
    e.currentTarget.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
    
        <div className={styles.tabsWrapper}>
          <div className={styles.tabsScroll}>
            {campusData.map((tab) => (
              <button
                key={tab.id}
                onClick={(e) => handleTabClick(tab, e)}
                className={`${styles.tabButton} ${
                  activeTab.id === tab.id ? styles.activeTab : ""
                }`}
              >
                {tab.eventName}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {activeTab.images.slice(0, visibleCount).map((img, i) => (
            <div key={i} className={styles.card}>
              <img src={img} alt="campus" />
            </div>
          ))}
        </div>

        {visibleCount < activeTab.images.length && (
          <div className={styles.loadMoreWrapper}>
            <button
              className={styles.loadMoreBtn}
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CampusLife;
