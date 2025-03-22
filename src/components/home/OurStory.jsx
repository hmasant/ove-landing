import style from "./style.module.css";

export default function OurStory() {
  return (
    <section className={style.story_sec}>
      <div className="grid_two">
        <div>
          <h2 className="white_heading">Hear what our numbers say about us</h2>
          <br />
          <br />
          <p>
            Save upto 50-70% cost compared to in-house hiring. Get matched with
            elite developers within 48 hours.
          </p>
          <br />
          <br />
          <img
            style={{ height: "6rem" }}
            fetchPriority="low"
            src="/stats.svg"
            loading="lazy"
            alt="Image"
          />
          <br />
          <br />
          <br />
          <br />
          <button>
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
