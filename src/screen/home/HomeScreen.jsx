import style from "./style.module.css";
import { lazy, useState, useEffect } from "react";
import { UpdateContext, ReadContext } from "../../context";

const Header = lazy(() => import("../../components/Header"));
const Footer = lazy(() => import("../../components/Footer"));
const Popup = lazy(() => import("../../components/home/PopupForm"));
const Projects = lazy(() => import("../../components/home/Projects"));
const OurStory = lazy(() => import("../../components/home/OurStory"));
const HeroVideo = lazy(() => import("../../components/home/HeroVideo"));
const Developer = lazy(() => import("../../components/home/Developer"));
const TabsSection = lazy(() => import("../../components/home/TabsSection"));
const Testimonial = lazy(() => import("../../components/home/Testimonial"));
const HiringProcess = lazy(() => import("../../components/home/HiringProcess"));

export default function HomeScreen() {
  const isMobile = useIsMobile();

  const update = UpdateContext();
  const popupState = ReadContext();

  return (
    <>
      <Header />
      <section className={style.hero_sec}>
        <div className="grid_two about-grid">
          <div className="hero-section-inner-parent">
            <img
              className="google-review"
              style={{ height: "1.5rem" }}
              alt="Google Ratings"
              fetchPriority="low"
              src="/ratings.svg"
              loading="lazy"
            />
            <h1 className={style.text_two}>
              Hire Software Developers<br></br> at Half Cost
            </h1>
            <h1 className={style.text_one}>
              Save up to 65% on Tech Team Hiring
            </h1>
            <p className={style.text_three}>
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
            {isMobile ? <></> : <HeroVideo />}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <center className="partnerships-parent">
          <h2 className="white_heading partnership-heading">
            Our Partnerships
          </h2>
          <br />
          <br />
          <div className="partnership-logo-parent">
            <img
              style={{ width: "80vw" }}
              src="/partnerships.webp"
              alt="Partnerships"
              loading="lazy"
            />
          </div>
        </center>
      </section>
      <center className="trusted-main-parent">
        <div className="trusted-inner-parent">
          <h2 className="black_heading trusted-heading">
            Trusted by Startups and{" "}
            <span style={{ color: "red" }}>Fortune 500</span> Companies!
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
      <Developer />
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
      {popupState.showPopup && <Popup />}
    </>
  );
}

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= breakpoint);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
};
