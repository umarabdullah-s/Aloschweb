import React from "react";
import styles from "./studentplaced.module.css";
import img from "@/assets/program/placedstudent/tony.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";


import "swiper/css";
import "swiper/css/autoplay";

const StudentPlaced = () => {
  const students = [
    {
      name: "Esai Kumar",
      role: "UI/UX Designer",
      image: img.src,
      color: "#FFBB0E",
    },
    {
      name: "Arun Kumar",
      role: "Product Designer",
      image: img.src,
      color: "#FF300E",
    },
    {
      name: "Vijay",
      role: "UX Researcher",
      image: img.src,
      color: "#144196",
    },
    {
      name: "Karthik",
      role: "UI Designer",
      image: img.src,
      color: "#00A99D",
    },
  ];
 const loopStudents = [...students, ...students, ...students, ...students];



  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <p className={styles.title}>100+ Placed Students</p>
          <p className={styles.para}>
            Start your UI/UX journey at ALO School of Design and Technology
            <br />
            in just a few simple steps.
          </p>
        </div>

        <Swiper
          className={styles.slider}
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          freeMode={true}
          loopAdditionalSlides={4} 
          speed={8000} 
          autoplay={{
            delay: 1,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            320: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {loopStudents.map((student, index) => (
            <SwiperSlide key={index}>
              <div
                className={styles.card}
                style={{ backgroundColor: student.color }}
              >
                <div className={styles.name}>
                  <p className={styles.stuname}>{student.name}</p>
                  <p className={styles.studesg}>{student.role}</p>
                </div>

                <div className={styles.img}>
                  <img src={student.image} alt={student.name} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default StudentPlaced;
