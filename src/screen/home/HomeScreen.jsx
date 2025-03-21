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
                src="/video_thumbnail.webp"
                alt="Video Thumbnail"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "68px",
                  height: "48px",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
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
      </section>
    </>
  );
}
