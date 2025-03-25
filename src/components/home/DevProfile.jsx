import style from "./style.module.css";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function DevProfile() {
  return (
    <section className={style.dev_section}>
      <div className="grid_two">
        <div>
          <Swiper
            effect={"cards"}
            grabCursor={true}
            className="dev-swiper"
            modules={[EffectCards]}
          >
            <SwiperSlide>
              <div className={style.dev_video}>
                <video controls>
                  <source
                    src="https://hire-ove.s3.ap-south-1.amazonaws.com/Manas_JavaDev.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <br />
                <br />
                <h4>Meghna Sharma</h4>
                <p>QA Engineer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.dev_video}>
                <video controls>
                  <source
                    src="https://hire-ove.s3.ap-south-1.amazonaws.com/Manas_JavaDev.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4>Manas Upadhya</h4>
                <p>Java Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.dev_video}>
                <video controls>
                  <source
                    src="https://hire-ove.s3.ap-south-1.amazonaws.com/Manas_JavaDev.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4>Prachi Negi</h4>
                <p>Business Analyst</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.dev_video}>
                <video controls>
                  <source
                    src="https://hire-ove.s3.ap-south-1.amazonaws.com/Manas_JavaDev.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4>Mehak Talwar</h4>
                <p>Dot Net Developer</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={style.dev_video}>
                <video controls>
                  <source
                    src="https://hire-ove.s3.ap-south-1.amazonaws.com/Manas_JavaDev.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <h4>Rahul Arora</h4>
                <p>Digital Marketer</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div>
          <p className={style.red_description}>Meet our Developers</p>
          <h2 className="black_heading">Hire your next developer</h2>
          <p>
            Our talent pool is well-versed in industry-leading technologies,
            enabling seamless collaboration with you to deliver optimal results.
          </p>
          <button onClick={() => setPopupOpen(true)}>
            <img
              style={{ width: "16rem", margin: 0 }}
              fetchPriority="low"
              src="/red_btn.svg"
              loading="lazy"
              alt="Button"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
