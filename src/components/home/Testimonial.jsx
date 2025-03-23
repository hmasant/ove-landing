import style from "./style.module.css";

export default function Testimonial() {
  return (
    <section className={style.testimonial_sec}>
      <p className={style.red_description}>Client Testimonials</p>
      <br />
      <h2 className="black_heading">
        Our success stories that speak <br /> for themselves
      </h2>
      <br />
      <br />
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
    </section>
  );
}
