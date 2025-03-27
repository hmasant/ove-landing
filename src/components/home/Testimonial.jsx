import style from "./style.module.css";

export default function Testimonial() {
  return (
    <section className={style.testimonial_sec}>
      <div className="testimonial-inner-parent">
      <p className={style.red_description}>Client Testimonials</p>
      <h2 className="black_heading">
        Our Success Stories That Speak <br /> for Themselves
      </h2>
      <div className={style.video_grid}>
        <video controls>
          <source
            src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/8.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source
            src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/7.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source
            src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/6.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source
            src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/9.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </section>
  );
}
