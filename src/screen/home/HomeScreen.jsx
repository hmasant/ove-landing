import style from "./style.module.css";
import { useState, lazy } from "react";

const Header = lazy(() => import("../../components/Header"));

export default function HomeScreen() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  const loadVideo = () => setVideoLoaded(true);

  return (
    <>
      <Header />
      <section className={style.hero_sec}>
        <div className={style.grid_two}>
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
                style={{ height: "2.5rem" }}
                src="/white_btn.svg"
                fetchPriority="low"
                loading="lazy"
                alt="Button"
              />
            </button>
          </div>

          {videoLoaded ? (
            <iframe
              width={480}
              height={270}
              rel="noopener"
              src="https://www.youtube.com/embed/Q1k63XEG9Ac"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              onClick={loadVideo}
              style={{
                position: "relative",
                width: "480px",
                height: "270px",
                backgroundColor: "#000",
                cursor: "pointer",
              }}
            >
              <img
                style={{ width: "100%", height: "100%" }}
                src="/thumbnail.webp"
                fetchPriority="low"
                loading="lazy"
                alt="Video"
              />
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  width: "68px",
                  height: "48px",
                  display: "flex",
                  position: "absolute",
                  borderRadius: "10px",
                  alignItems: "center",
                  justifyContent: "center",
                  transform: "translate(-50%, -50%)",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                }}
              >
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: "12px 0 12px 20px",
                    borderColor: "transparent transparent transparent #fff",
                  }}
                ></div>
              </div>
            </div>
          )}
        </div>
        <br />
        <br />
        <br />
        <h2 className={style.white_heading}>Our Partnerships</h2>
        <br />
        <br />
        <center>
          <img
            style={{ width: "70vw" }}
            src="/partnerships.svg"
            fetchPriority="low"
            alt="Partnerships"
            loading="lazy"
          />
        </center>
      </section>
    </>
  );
}
