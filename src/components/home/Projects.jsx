import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <center className="project-main-parent">
      <div className="project-inner-parent">
      <p className={style.red_description}>Our Recent Projects</p>
      <h2 className="black_heading">Our recently delivered projects</h2>
      <Swiper
        loop={true}
        slidesPerView={1}
        spaceBetween={50}
        navigation={true}
        className="mySwiper"
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
      >
        <SwiperSlide>
          <img
            src="/projects/project_1.webp"
            style={{ width: "80%" }}
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/projects/project_2.webp"
            style={{ width: "80%" }}
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/projects/project_3.webp"
            style={{ width: "80%" }}
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/projects/project_4.webp"
            style={{ width: "80%" }}
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/projects/project_5.webp"
            style={{ width: "80%" }}
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
      </Swiper>
      </div>
    </center>
  );
}
