import { useState } from "react";
import style from "./style.module.css";
import { Header } from "../../components/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import { TabComponent } from "../../components/TabComponent";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { addDocument } from "../../../firebase/cloudFirestore/setData";
import { Box, Grid2, Container, Typography, TextField } from "@mui/material";

const Spacer = () => <Box py={5}></Box>;

export default function HomeScreen() {
  const [isMuted, setIsMuted] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [brief, setBrief] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault;
    await addDocument("leads", { name, email, phone, brief });

    setName("");
    setPhone("");
    setEmail("");
    setBrief("");
  };

  return (
    <>
      <section className={style.hero_sec}>
        <Header />
        <Spacer />
        <Container maxWidth="xl">
          <Grid2 container spacing={5}>
            <Grid2
              size={{ md: 6 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography fontSize={30} color="#CF2D31">
                  YOUR DIGITAL TRANSFORMATION PARTNER
                </Typography>
                <br />
                <h1>Hire top product and engineering talent</h1>
                <br />
                <br />
                <br />
                <a href="#">
                  <img
                    style={{ width: "16rem", margin: 0 }}
                    src="/black_btn.png"
                    alt="Image"
                  />
                </a>
              </Box>
            </Grid2>
            <Grid2 size={{ md: 6 }}>
              <div className={style.hero_video}>
                <video loop autoPlay playsInline muted={isMuted}>
                  <source
                    src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/podcast"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <button onClick={() => setIsMuted(!isMuted)}>
                  {isMuted ? (
                    <i className="fa-solid fa-volume-xmark"></i>
                  ) : (
                    <i className="fa-solid fa-volume-high"></i>
                  )}
                </button>
              </div>
            </Grid2>
          </Grid2>
          <Spacer />
          <Typography
            variant="h3"
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
        Partnered with Startups and
        <span style={{ color: "#CF2D31" }}> Fortune 500 </span>Companies!
      </Typography>
      <br />
      <br />
      <img src="/clients.png" alt="Image" />
      <Spacer />
      <img src="/numbers.png" alt="Image" />
      <Spacer />
      <Container>
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
        <Grid2 container spacing={2}>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <div className={style.testimonial_video}>
              <video controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/6.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid2>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <Spacer />
            <div className={style.testimonial_video}>
              <video controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/7.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid2>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <div className={style.testimonial_video}>
              <video controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/8.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid2>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <Spacer />
            <div className={style.testimonial_video}>
              <video controls>
                <source
                  src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/9.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Grid2>
        </Grid2>
      </Container>
      <Spacer />
      <img src="/heading.png" alt="Image" style={{ width: "60vw" }} />
      <Spacer />
      <TabComponent />
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
                    <video controls>
                      <source
                        src="https://scoobies-backend.s3.ap-south-1.amazonaws.com/meghna_qa_final.mp4"
                        type="video/mp4"
                      />
                      Your browser does not support the video tag.
                    </video>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
              similique. Amet itaque ipsam dolorum facilis ducimus aut, officia
              officiis expedita, ullam incidunt neque repudiandae molestiae
              assumenda maxime quae alias nobis?
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
            <a href="#">
              <img
                style={{ width: "16rem", margin: 0 }}
                src="/red_btn.png"
                alt="Button"
              />
            </a>
          </Grid2>
        </Grid2>
      </Container>
      <Spacer />
      <img src="/cta_final.png" alt="Image" style={{ width: "90vw" }} />
      <Spacer />
      <Container>
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
        <br />
        <br />
        <Typography textAlign="center" color="grey">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores
          laudantium voluptates aspernatur rerum, quasi ullam dolorem
          necessitatibus dolor vero repudiandae alias odit facere commodi rem
          cumque reiciendis corporis totam repellendus.
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
          Our recently designed build and <br /> launched products
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
            <img src="/project_1.png" alt="Project" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/project_1.png" alt="Project" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/project_1.png" alt="Project" />
          </SwiperSlide>
        </Swiper>
      </Container>
      <Spacer />
      <section className={style.footer_sec}>
        <Grid2 container spacing={10}>
          <Grid2 size={{ md: 6 }}></Grid2>
          <Grid2 size={{ md: 6 }}>
            <Spacer />
            <Typography
              variant="h3"
              color="white"
              fontWeight="bold"
              textAlign="center"
            >
              Talk to our experts
            </Typography>
            <Spacer />
            <TextField
              value={name}
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
              required
            />
            <br />
            <br />
            <TextField
              value={brief}
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
            <br />
            <button onClick={handleSubmit}>
              <img
                style={{ width: "16rem", margin: 0 }}
                src="/black_btn.png"
                alt="Image"
              />
            </button>
          </Grid2>
        </Grid2>
      </section>
      <Box m={1}></Box>
      <img src="/office_location.png" alt="Image" />
    </>
  );
}
