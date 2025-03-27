import style from "./style.module.css";

export default function OurStory() {
  return (
    <section className={`story-main-parent ${style.story_sec}`}>
      <div className="grid_two story-grid">
        <div className="about-left-parent">
          <h2 className="white_heading">Hear what our numbers say about us</h2>
          <p>
            Save upto 50-70% cost compared to in-house hiring. Get matched with
            elite developers within 48 hours.
          </p>
          <img
            className="story-image"
            style={{ height: "6rem" }}
            fetchPriority="low"
            src="/stats.svg"
            loading="lazy"
            alt="Image"
          />
          <button className="about-btn">
            <img
              style={{ height: "3rem" }}
              src="/white_btn.svg"
              fetchPriority="low"
              loading="lazy"
              alt="Image"
            />
          </button>
        </div>
      </div>
    </section>
  );
}
