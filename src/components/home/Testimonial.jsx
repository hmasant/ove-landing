import style from "./style.module.css";

export default function Testimonial() {
  return (
    <section id="client-success" className={style.testimonial_sec}>
      <div className="testimonial-inner-parent">
        <p className={style.red_description}>Client Testimonials</p>
        <h2 className="black_heading">
          Our Success Stories That Speak <br /> for Themselves
        </h2>

        <div className={`client-testimonial ${style.video_grid}`}>
          <div className="client-video-parent">
            <video
              className="client-videos"
              poster="./jenny.png"
              preload="metadata"
              controls
            >
              <source
                src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/8.mp4"
                type="video/mp4"
              />
            </video>
            <div className="client-bio-parent">
              <h3>Jenny Junkeer</h3>
              <p>CEO, Intent</p>
            </div>
          </div>

          <div className="client-video-parent">
            <video
              className="client-videos"
              poster="./mark.png"
              preload="metadata"
              controls
            >
              <source
                src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/7.mp4"
                type="video/mp4"
              />
            </video>
            <div className="client-bio-parent">
              <h3>Mark Reisinger</h3>
              <p>MD, Web Zulu</p>
            </div>
          </div>

          <div className="client-video-parent">
            <video
              className="client-videos"
              poster="./matt.png"
              preload="metadata"
              controls
            >
              <source
                src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/6.mp4"
                type="video/mp4"
              />
            </video>
            <div className="client-bio-parent">
              <h3>Matt Lonergan</h3>
              <p>CEO, PMO PRO</p>
            </div>
          </div>

          <div className="client-video-parent">
            <video
              className="client-videos"
              poster="./matthew.png"
              preload="metadata"
              controls
            >
              <source
                src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/9.mp4"
                type="video/mp4"
              />
            </video>
            <div className="client-bio-parent">
              <h3>Matthew Clews</h3>
              <p>MD, Sea Side Media</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
