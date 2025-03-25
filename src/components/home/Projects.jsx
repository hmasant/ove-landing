import style from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

export default function Projects() {
  return (
    <center>
      <p className={style.red_description}>Our Recent Projects</p>
      <br />
      <h2 className="black_heading">Our recently delivered projects</h2>
      <br />
      <br />
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
            style={{ width: "80%" }}
            src="/project_1.png"
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%" }}
            src="/project_2.png"
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%" }}
            src="/project_3.png"
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%" }}
            src="/project_4.png"
            fetchPriority="low"
            loading="lazy"
            alt="Project"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            style={{ width: "80%" }}
            fetchPriority="low"
            loading="lazy"
            src="/project_5.png"
            alt="Project"
          />
        </SwiperSlide>
      </Swiper>
    </center>
  );
}
