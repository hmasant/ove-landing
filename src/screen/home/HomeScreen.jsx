import style from "./style.module.css";
import { useState, lazy } from "react";

const Header = lazy(() => import("../../components/Header"));

export default function HomeScreen() {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      <Header />
      <section className={style.hero_sec}>
        <div className={style.grid_two}>
          <div>
            <img
              style={{ height: "1.5rem" }}
              alt="Google Ratings"
              fetchPriority="high"
              src="/ratings.svg"
              loading="eager"
            />
            <br />
            <br />
            <br />
            <h1 className={style.text_one}>Build Your Tech Team</h1>
            <h1 className={style.text_two}>WITH TOP INDIAN DEVELOPERS</h1>
            <br />
            <h2 className={style.text_three}>At AUD 999 + Salary</h2>
            <br />
            <br />
            <br />
            <button>
              <img
                style={{ height: "2.5rem" }}
                src="/white_btn.svg"
                fetchPriority="high"
                loading="eager"
                alt="Button"
              />
            </button>
          </div>
          <iframe
            width={480}
            height={270}
            rel="noopener"
            src="https://www.youtube.com/embed/Q1k63XEG9Ac"
          ></iframe>
        </div>
      </section>
    </>
  );
}
