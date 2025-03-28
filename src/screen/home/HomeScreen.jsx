import style from "./style.module.css";
import { useState, lazy } from "react";
import { UpdateContext, ReadContext } from "../../context";

const Header = lazy(() => import("../../components/Header"));
const Footer = lazy(() => import("../../components/Footer"));
const Popup = lazy(() => import("../../components/home/PopupForm"));

const Projects = lazy(() => import("../../components/home/Projects"));
const OurStory = lazy(() => import("../../components/home/OurStory"));
const TabsSection = lazy(() => import("../../components/home/TabsSection"));
const Testimonial = lazy(() => import("../../components/home/Testimonial"));
const HiringProcess = lazy(() => import("../../components/home/HiringProcess"));

export default function HomeScreen() {
  const update = UpdateContext();
  const popupState = ReadContext();

  const [videoLoaded, setVideoLoaded] = useState(false);

  const loadVideo = () => setVideoLoaded(true);

  return (
    <>
      {popupState.showPopup ? <Popup /> : <></>}
      <Header />
      <section className={style.hero_sec}>
        <div className="grid_two about-grid">
          <div className="hero-section-inner-parent">
            <img
              style={{ height: "1.5rem" }}
              alt="Google Ratings"
              fetchPriority="low"
              src="/ratings.svg"
              loading="lazy"
            />
            <br />
            <br />
            <h1 className={style.text_one}>Save upto 65%</h1>
            <h1 className={style.text_two}>ON YOUR TECHNOLOGY TEAM</h1>
            <p className={`hire-world-class ${style.text_three}`}>
              Hire world-class tech teams supercharged by AI
            </p>
            <button className="banner-btn" onClick={() => update.togglePopup()}>
              <img
                style={{ height: "3rem" }}
                src="/white_btn.svg"
                fetchPriority="low"
                loading="lazy"
                alt="Button"
              />
            </button>
          </div>
          <div className={style.video_sec}>
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
                  fetchPriority="high"
                  loading="eager"
                  alt="Video"
                />
              </div>
            )}
          </div>
        </div>
        <center className="partnerships-parent">
          <h2 className="white_heading partnership-heading">
            Our Partnerships
          </h2>
          <div className="partnership-logo-parent">
            <img
              style={{ width: "80vw" }}
              src="/partnerships.svg"
              fetchPriority="low"
              alt="Partnerships"
              loading="lazy"
            />
          </div>
        </center>
      </section>
      <center className="trusted-main-parent">
        <div className="trusted-inner-parent">
          <h2 className="black_heading trusted-heading">
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
        </div>
      </center>
      <OurStory />
      <Testimonial />
      <TabsSection />
      <HiringProcess />
      <img
        style={{ width: "100vw" }}
        src="/achievements.svg"
        fetchPriority="low"
        loading="lazy"
        alt="Image"
      />
      <Projects />
      <Footer />
      <img
        style={{ width: "100vw", marginTop: "0.25rem" }}
        src="/office_location.svg"
        fetchPriority="low"
        loading="lazy"
        alt="Image"
      />
    </>
  );
}
