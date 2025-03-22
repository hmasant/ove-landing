import style from "./style.module.css";
import { useState, lazy } from "react";

const Header = lazy(() => import("../../components/Header"));
const OurStory = lazy(() => import("../../components/home/OurStory"));

export default function HomeScreen() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const loadVideo = () => setVideoLoaded(true);

  return (
    <>
      <Header />
      <section className={style.hero_sec}>
        <div className="grid_two">
          <div>
            <img
              style={{ height: "1.5rem" }}
              alt="Google Ratings"
              fetchPriority="low"
              src="/ratings.svg"
              loading="lazy"
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
                style={{ height: "3rem" }}
                src="/white_btn.svg"
                fetchPriority="low"
                loading="lazy"
                alt="Button"
              />
            </button>
          </div>

          {videoLoaded ? (
            <iframe
              width={"100%"}
              height={"100%"}
              rel="noopener"
              src="https://www.youtube.com/embed/Q1k63XEG9Ac"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              onClick={loadVideo}
              style={{ cursor: "pointer", border: "2px solid white" }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="/thumbnail.webp"
                fetchPriority="low"
                loading="lazy"
                alt="Video"
              />
            </div>
          )}
        </div>
        <br />
        <br />
        <br />
        <br />
        <center>
          <h2 className="white_heading">Our Partnerships</h2>
          <br />
          <br />
          <img
            style={{ width: "60vw" }}
            src="/partnerships.svg"
            fetchPriority="low"
            alt="Partnerships"
            loading="lazy"
          />
        </center>
      </section>
      <br />
      <br />
      <br />
      <br />
      <center>
        <h2 className="black_heading">
          Trusted by Startups and
          <span style={{ color: "red" }}> Fortune 500 </span>
          Companies!
        </h2>
        <br />
        <br />
        <img
          style={{ width: "90vw" }}
          fetchPriority="low"
          src="/clients.svg"
          loading="lazy"
          alt="Clients"
        />
      </center>
      <br />
      <br />
      <br />
      <br />
      <OurStory />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}
