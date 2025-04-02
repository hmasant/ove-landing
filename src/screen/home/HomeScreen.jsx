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

  return (
    <>
      {popupState.showPopup && <Popup />}
      <Header />
      <section className={style.hero_sec}>
        <div className="grid_two about-grid">
          <div className="hero-section-inner-parent">
            <img
              style={{ height: "1.5rem" }}
              alt="Google Ratings"
              fetchPriority="low"
              src="/ratings.svg"
            />
            <br />
            <br />
            <h1 className={style.text_one}>Save up to 65%</h1>
            <h1 className={style.text_two}>ON YOUR TECHNOLOGY TEAM</h1>
            <p className={`hire-world-class ${style.text_three}`}>
              Hire world-class tech teams supercharged by AI
            </p>
            <button className="banner-btn" onClick={() => update.togglePopup()}>
              <img
                style={{ height: "3rem" }}
                src="/white_btn.svg"
                fetchPriority="low"
                alt="Button"
              />
            </button>
          </div>
          <div className={style.video_sec}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Q1k63XEG9Ac?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <center className="partnerships-parent">
          <h2 className="white_heading partnership-heading">Our Partnerships</h2>
          <div className="partnership-logo-parent">
            <img
              style={{ width: "80vw" }}
              src="/partnerships.svg"
              fetchPriority="low"
              alt="Partnerships"
            />
          </div>
        </center>
      </section>
      <center className="trusted-main-parent">
        <div className="trusted-inner-parent">
          <h2 className="black_heading trusted-heading">
            Trusted by Startups and <span style={{ color: "red" }}>Fortune 500</span> Companies!
          </h2>
          <br />
          <br />
          <img
            style={{ width: "90vw" }}
            fetchPriority="low"
            src="/clients.svg"
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
        alt="Image"
      />
      <Projects />
      <Footer />
      <img
        style={{ width: "100vw", marginTop: "0.25rem" }}
        src="/office_location.svg"
        fetchPriority="low"
        alt="Image"
      />
    </>
  );
}
