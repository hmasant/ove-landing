import style from "./style.module.css";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { postRequest } from "../../network/request";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import {
  Box,
  Grid2,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
} from "@mui/material";

const Spacer = () => <Box py={4}></Box>;

export default function HomeScreen() {
  const navigate = useNavigate();

  const hiringRef = useRef(null);
  const testimonialRef = useRef(null);

  const [tab, setTab] = useState(0);

  const [isMuted, setIsMuted] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");

  const cfUrl = "https://tight-pond-b68f.himanshu-masant-6f5.workers.dev/";

  const handleSubmit = async (e) => {
    e.preventDefault();

    await postRequest(cfUrl, { name, email, phone, brief });

    setName("");
    setPhone("");
    setEmail("");
    setBrief("");

    setPopupOpen(false);
    navigate("/thanks");
  };

  const data = [
    {
      heading: "SaaS & Software Products",
      content: `We specialize in building scalable and secure SaaS solutions 
      tailored to your business needs. From MVP development to full-scale platforms,
      our team ensures seamless cloud integration, multi-tenancy support, and robust
      security. We help businesses transform ideas into market-ready SaaS products
      with rapid deployment and continuous enhancements.`,
    },
    {
      heading: "Custom Web App Development",
      content: `Our team crafts high-performance web applications designed for speed, 
      security, and scalability. Whether you need a simple business tool or a complex
      enterprise-grade solution, we leverage modern technologies to deliver intuitive
      and responsive web applications. Our development process ensures seamless
      integration with your existing systems.`,
    },
    {
      heading: "eCommerce Development",
      content: `We develop dynamic e-commerce platforms that enhance user engagement 
      and drive sales. From custom online stores to marketplace solutions, we offer
      secure payment gateways, AI-powered recommendations, and omnichannel shopping
      experiences. Our expertise in Shopify, Magento, and custom-built solutions
      ensures a seamless e-commerce journey.`,
    },
    {
      heading: "Digital Transformation Solutions",
      content: `We empower businesses with cutting-edge digital transformation 
      strategies, enabling them to stay ahead in a competitive landscape. From
      automating workflows to integrating AI and cloud solutions, we drive
      efficiency and innovation. Our end-to-end solutions help organizations
      adapt to evolving digital trends and customer expectations.`,
    },
    {
      heading: "UI/UX Design & Development",
      content: `We create user-centric designs that enhance digital experiences 
      and improve engagement. Our UI/UX experts conduct in-depth research to
      design intuitive interfaces, seamless navigation, and visually appealing
      layouts. Whether it's a web app, mobile app, or SaaS platform, we focus
      on aesthetics and functionality.`,
    },
    {
      heading: "Mobile App Development",
      content: `We build powerful and feature-rich mobile applications for iOS 
      and Android using the latest technologies. Our expertise spans native and
      cross-platform development, ensuring performance optimization, security,
      and a superior user experience. From startups to enterprises, we craft apps
      that drive engagement and growth.`,
    },
    {
      heading: "API Development & Integration",
      content: `We offer robust API development and integration services to connect 
      applications, enhance functionality, and streamline workflows. Whether it's
      third-party API integration or custom API development, we ensure secure,
      scalable, and seamless connectivity between systems, improving efficiency
      and interoperability.`,
    },
  ];

  return (
    <>
      <section className={style.hero_sec}>
        <header>
          <Container maxWidth="xl">
            <Box
              py={2}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <img
                style={{ width: "10rem", margin: 0 }}
                src="/logo.png"
                alt="OVE Logo"
              />
              &nbsp; &nbsp; &nbsp; &nbsp;
              <menu>
                <button
                  onClick={() => {
                    hiringRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Hiring Process
                </button>
                &nbsp; &nbsp; &nbsp;
                <button
                  onClick={() => {
                    testimonialRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }}
                >
                  Client Success
                </button>
                &nbsp; &nbsp; &nbsp;
                <button onClick={() => setPopupOpen(true)}>Book a Call</button>
                &nbsp; &nbsp; &nbsp;
                <Button
                  onClick={() => setPopupOpen(true)}
                  variant="contained"
                  color="error"
                >
                  <Typography fontWeight="bold">Contact Us</Typography>
                </Button>
              </menu>
            </Box>
          </Container>
        </header>
        <Spacer />
        <Container>
          <Grid2 container spacing={10}>
            <Grid2
              size={{ md: 6 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <img
                  src="/rating.svg"
                  alt="Google Ratings"
                  style={{ width: "15rem", margin: 0 }}
                />
                <br />
                <Typography variant="h3" color="red" fontWeight="bold">
                  Build Your Tech Team
                </Typography>
                <br />
                <Typography variant="h4" color="white" fontWeight="bold">
                  WITH TOP INDIAN DEVELOPERS
                </Typography>
                <br />
                <Typography variant="h5" color="white">
                  AUD 999 + Salary
                </Typography>
                <br />
                <br />
                <button onClick={() => setPopupOpen(true)}>
                  <img
                    className={style.big_btn}
                    src="/black_btn.svg"
                    alt="Image"
                  />
                </button>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6 }}>
              <video loop autoPlay playsInline muted={isMuted}>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/OVE.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <button
                className={style.mute_btn}
                onClick={() => setIsMuted(!isMuted)}
              >
                {isMuted ? (
                  <i className="fa-solid fa-volume-xmark"></i>
                ) : (
                  <i className="fa-solid fa-volume-high"></i>
                )}
              </button>
            </Grid2>
          </Grid2>
          <Spacer />
          <Spacer />
          <Typography
            variant="h4"
            color="white"
            fontWeight="bold"
            textAlign="center"
          >
            OUR PARTNERSHIPS
          </Typography>
          <br />
          <br />
          <img style={{ width: "70vw" }} src="/partnerships.png" alt="Image" />
        </Container>
      </section>
      <Spacer />
      <Typography variant="h4" fontWeight={600} textAlign="center">
        Trusted by Startups and
        <span style={{ color: "#CF2D31" }}> Fortune 500 </span>Companies!
      </Typography>
      <br />
      <br />
      <img
        style={{ width: "90vw", textAlign: "center" }}
        src="/clients.png"
        alt="Image"
      />
      <Spacer />
      <section className={style.cta_sec}>
        <Grid2 container spacing={10}>
          <Grid2 size={{ md: 6 }}>
            <Typography variant="h3" color="white" fontWeight={200}>
              Hear what our numbers say about us
            </Typography>
            <br />
            <br />
            <Typography color="white" variant="h5" fontWeight={200}>
              Save upto 50-70% cost compared to in-house hiring. Get matched
              with elite developers within 48 hours.
            </Typography>
            <Spacer />
            <img src="/stats.png" alt="Image" />
            <Spacer />
            <button onClick={() => setPopupOpen(true)}>
              <img
                className={style.big_btn}
                src="/numbers_btn.png"
                alt="Image"
              />
            </button>
          </Grid2>
        </Grid2>
      </section>
      <Spacer />
      <Container ref={testimonialRef}>
        <Typography
          variant="h5"
          color="#CF2D31"
          fontWeight="bold"
          textAlign="center"
        >
          Client Testimonials
        </Typography>
        <br />
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Our success stories that speak <br /> for themselves
        </Typography>
        <Spacer />
        <Grid2 container spacing={3}>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <div className={style.testimonial_video}>
              <video
                controls
                poster="https://scoobies-backend.s3.ap-south-1.amazonaws.com/jenny.png"
              >
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/8.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <br />
              <br />
              <Box mx={2}>
                <Typography variant="h5">Jenny Junkeer</Typography>
                <Typography color="grey">CEO, Intent</Typography>
              </Box>
            </div>
          </Grid2>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <Spacer />
            <div className={style.testimonial_video}>
              <video
                controls
                poster="https://scoobies-backend.s3.ap-south-1.amazonaws.com/mark.png"
              >
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/7.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <br />
              <br />
              <Box mx={2}>
                <Typography variant="h5">Mark Reisinger</Typography>
                <Typography color="grey">MD, Web Zulu</Typography>
              </Box>
            </div>
          </Grid2>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <div className={style.testimonial_video}>
              <video
                controls
                poster="https://scoobies-backend.s3.ap-south-1.amazonaws.com/matt.png"
              >
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/6.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <br />
              <br />
              <Box mx={2}>
                <Typography variant="h5">Matt Lonergan</Typography>
                <Typography color="grey">CEO, PMO PRO</Typography>
              </Box>
            </div>
          </Grid2>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <Spacer />
            <div className={style.testimonial_video}>
              <video
                controls
                poster="https://scoobies-backend.s3.ap-south-1.amazonaws.com/matthew.png"
              >
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/9.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <br />
              <br />
              <Box mx={2}>
                <Typography variant="h5">Matthew Clews</Typography>
                <Typography color="grey">MD, Sea Side Media</Typography>
              </Box>
            </div>
          </Grid2>
        </Grid2>
      </Container>
      <Spacer />
      <Divider />
      <Spacer />
      <Box textAlign="center">
        <Typography variant="h4" textAlign="center" fontWeight="bold">
          Want to get started?
        </Typography>
        <br />
        <button onClick={() => setPopupOpen(true)}>
          <img
            className={style.big_btn}
            src="/consultation_btn.png"
            alt="Image"
          />
        </button>
      </Box>
      <Spacer />
      <Divider />
      <Spacer />
      <img src="/heading.png" alt="Image" style={{ width: "60vw" }} />
      <Spacer />
      <section className={style.tab_sec}>
        <div className={style.tab_grid}>
          {data.map((e, index) =>
            tab === index ? (
              <img
                key={index}
                alt={e.heading}
                onClick={() => setTab(index)}
                src={`/tabs/tab_${index}_white.svg`}
              />
            ) : (
              <img
                key={index}
                alt={e.heading}
                onClick={() => setTab(index)}
                src={`/tabs/tab_${index}_red.svg`}
              />
            )
          )}
        </div>
        <Box py={5}></Box>
        <Container>
          <Grid2 container spacing={10}>
            <Grid2 size={{ md: 6 }}>
              <Typography variant="h3" fontWeight="bold" color="white">
                {data[tab].heading}
              </Typography>
              <br />
              <br />
              <Typography color="white">{data[tab].content}</Typography>
              <br />
              <br />
              <br />
              <Button
                color="error"
                variant="contained"
                onClick={() => setPopupOpen(true)}
              >
                <Typography variant="h6">
                  Share Your Requirement &nbsp; &nbsp; &nbsp;
                  <i className="fa-solid fa-angles-right"></i>
                </Typography>
              </Button>
            </Grid2>
            <Grid2 size={{ md: 6 }}>
              <img
                style={{ borderRadius: 25 }}
                src={`/graphic_${tab}.png`}
                alt="Image"
              />
            </Grid2>
          </Grid2>
        </Container>
        <Box py={5}></Box>
      </section>
      <Spacer />
      <Container>
        <Grid2 container spacing={20}>
          <Grid2 size={{ md: 4 }}>
            <section className={style.dev_grid}>
              <Swiper
                effect={"cards"}
                grabCursor={true}
                className="mySwiper"
                modules={[EffectCards]}
              >
                <SwiperSlide>
                  <div className={style.dev_video}>
                    <video
                      controls
                      poster="https://scoobies-backend.s3.ap-south-1.amazonaws.com/meghna.png"
                    >
                      <source
                        src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/meghna_qa_final.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <Box
                      m={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h5" color="white">
                          Meghna
                        </Typography>
                        <Typography color="white" sx={{ opacity: "0.5" }}>
                          QA Engineer
                        </Typography>
                      </Box>
                      <img
                        style={{ width: "2rem", margin: 0 }}
                        src="/swipe.png"
                        alt="Gesture"
                      />
                    </Box>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style.dev_video}>
                    <video controls>
                      <source
                        src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/manas_java_final.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <Box
                      m={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h5" color="white">
                          Manas
                        </Typography>
                        <Typography color="white" sx={{ opacity: "0.5" }}>
                          Java Developer
                        </Typography>
                      </Box>
                      <img
                        style={{ width: "2rem", margin: 0 }}
                        src="/swipe.png"
                        alt="Gesture"
                      />
                    </Box>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style.dev_video}>
                    <video controls>
                      <source
                        src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/Prachi_TechBA.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <Box
                      m={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h5" color="white">
                          Prachi
                        </Typography>
                        <Typography color="white" sx={{ opacity: "0.5" }}>
                          Business Analyst
                        </Typography>
                      </Box>
                      <img
                        style={{ width: "2rem", margin: 0 }}
                        src="/swipe.png"
                        alt="Gesture"
                      />
                    </Box>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style.dev_video}>
                    <video controls>
                      <source
                        src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/Mehak_Dotnet.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <Box
                      m={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h5" color="white">
                          Mehak
                        </Typography>
                        <Typography color="white" sx={{ opacity: "0.5" }}>
                          Dot Net Developer
                        </Typography>
                      </Box>
                      <img
                        style={{ width: "2rem", margin: 0 }}
                        src="/swipe.png"
                        alt="Gesture"
                      />
                    </Box>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={style.dev_video}>
                    <video controls>
                      <source
                        src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/Rahul_DigitalMarketing.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
                    <Box
                      m={2}
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                    >
                      <Box>
                        <Typography variant="h5" color="white">
                          Rahul
                        </Typography>
                        <Typography color="white" sx={{ opacity: "0.5" }}>
                          Digital Marketer
                        </Typography>
                      </Box>
                      <img
                        style={{ width: "2rem", margin: 0 }}
                        src="/swipe.png"
                        alt="Gesture"
                      />
                    </Box>
                  </div>
                </SwiperSlide>
              </Swiper>
            </section>
          </Grid2>
          <Grid2 size={{ md: 8 }}>
            <Typography variant="h5" color="#CF2D31" fontWeight="bold">
              Meet our Developers
            </Typography>
            <br />
            <Typography variant="h3" fontWeight="bold">
              Hire your next developer
            </Typography>
            <br />
            <Typography color="grey">
              Our talent pool is well-versed in industry-leading technologies,
              enabling seamless collaboration with you to deliver optimal
              results.
            </Typography>
            <br />
            <br />
            <br />
            <img
              style={{ width: "60%", margin: 0 }}
              src="/dev_sec_cards.png"
              alt="Image"
            />
            <br />
            <br />
            <br />
            <button onClick={() => setPopupOpen(true)}>
              <img
                style={{ width: "16rem", margin: 0 }}
                src="/red_btn.png"
                alt="Button"
              />
            </button>
          </Grid2>
        </Grid2>
      </Container>
      <Spacer />
      <img
        alt="Image"
        src="/cta_final.png"
        style={{ width: "90vw" }}
        onClick={() => setPopupOpen(true)}
      />
      <Spacer />
      <Container ref={hiringRef}>
        <Typography
          variant="h5"
          color="#CF2D31"
          fontWeight="bold"
          textAlign="center"
        >
          Our Hiring Process
        </Typography>
        <br />
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Hire your next Developer in
        </Typography>
        <Typography
          variant="h3"
          color="#CF2D31"
          fontWeight="bold"
          textAlign="center"
        >
          3 simple steps
        </Typography>
        <Spacer />
        <img src="/hiring_process.png" alt="Image" />
      </Container>
      <Spacer />
      <img src="/achievements.png" alt="Image" />
      <Spacer />
      <Container>
        <Typography
          variant="h5"
          color="#CF2D31"
          fontWeight="bold"
          textAlign="center"
        >
          Our Recent Projects
        </Typography>
        <br />
        <Typography textAlign="center" variant="h3" fontWeight="bold">
          Our recently delivered projects
        </Typography>
        <Swiper
          loop={true}
          slidesPerView={1}
          spaceBetween={50}
          navigation={true}
          className="mySwiper"
          pagination={{ clickable: true }}
          modules={[Pagination, Navigation]}
        >
          <SwiperSlide>
            <img src="/project_1.png" alt="Project" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/project_2.png" alt="Project" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/project_3.png" alt="Project" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/project_4.png" alt="Project" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/project_5.png" alt="Project" />
          </SwiperSlide>
        </Swiper>
      </Container>
      <Spacer />
      <section className={style.footer_sec}>
        <div></div>
        <div>
          <div>
            <Typography
              variant="h4"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              Share Your Requirements
            </Typography>
            <br />
            <Typography variant="h5" textAlign="center" color="grey">
              We'll get back to you shortly!
            </Typography>
            <br />
            <br />
            <form onSubmit={handleSubmit}>
              <TextField
                value={name}
                type="text"
                label="Name"
                color="error"
                variant="standard"
                placeholder="Enter Your Name"
                onChange={(e) => setName(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "white",
                  },
                }}
                fullWidth
                required
              />
              <br />
              <br />
              <TextField
                value={email}
                type="email"
                label="Email"
                color="error"
                variant="standard"
                placeholder="Enter Your Email"
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "white",
                  },
                }}
                fullWidth
                required
              />
              <br />
              <br />
              <TextField
                value={phone}
                type="number"
                label="Phone"
                color="error"
                variant="standard"
                placeholder="Enter Your Phone"
                onChange={(e) => setPhone(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "white",
                  },
                }}
                fullWidth
              />
              <br />
              <br />
              <TextField
                value={brief}
                type="text"
                color="error"
                variant="standard"
                label="Project Brief"
                placeholder="Enter Your Project Details"
                onChange={(e) => setBrief(e.target.value)}
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "white",
                  },
                  "& .MuiInput-underline:hover:before": {
                    borderBottomColor: "white",
                  },
                }}
                fullWidth
                multiline
                required
                rows={4}
              />
              <br />
              <br />
              <br />
              <button type="submit">
                <img
                  className={style.big_btn}
                  src="/black_btn.svg"
                  alt="Image"
                />
              </button>
            </form>
          </div>
        </div>
      </section>
      <Box m={1}></Box>
      <img src="/office_location.png" alt="Image" />
      {popupOpen ? (
        <section className={style.popup_section}>
          <div className={style.popup_form}>
            <button
              onClick={() => setPopupOpen(false)}
              className={style.popup_close_btn}
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div></div>
            <div>
              <img
                style={{ width: "12rem" }}
                src="/logo_black.png"
                alt="OVE Logo"
              />
              <br />
              <form onSubmit={handleSubmit}>
                <TextField
                  value={name}
                  type="text"
                  label="Name"
                  color="error"
                  variant="standard"
                  placeholder="Enter Your Name"
                  onChange={(e) => setName(e.target.value)}
                  fullWidth
                  required
                />
                <br />
                <br />
                <TextField
                  value={email}
                  type="email"
                  label="Email"
                  color="error"
                  variant="standard"
                  placeholder="Enter Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  required
                />
                <br />
                <br />
                <TextField
                  value={phone}
                  type="number"
                  label="Phone"
                  color="error"
                  variant="standard"
                  placeholder="Enter Your Phone"
                  onChange={(e) => setPhone(e.target.value)}
                  fullWidth
                />
                <br />
                <br />
                <TextField
                  value={brief}
                  type="text"
                  color="error"
                  variant="standard"
                  label="Project Brief"
                  placeholder="Enter Your Project Details"
                  onChange={(e) => setBrief(e.target.value)}
                  fullWidth
                  multiline
                  required
                  rows={3}
                />
                <br />
                <br />
                <br />
                <button type="submit">
                  <img
                    style={{ width: "16rem" }}
                    src="/consultation_btn.png"
                    alt="Image"
                  />
                </button>
              </form>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
