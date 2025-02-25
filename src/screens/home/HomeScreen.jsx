import style from "./style.module.css";
import { useState, useRef } from "react";
import { Popup } from "../../components/Popup";
import { Swiper, SwiperSlide } from "swiper/react";
import { TabComponent } from "../../components/TabComponent";
import { EffectCards, Pagination, Navigation } from "swiper/modules";
import { addDocument } from "../../../firebase/cloudFirestore/setData";
import {
  Box,
  Grid2,
  Button,
  Divider,
  Container,
  TextField,
  Typography,
} from "@mui/material";

const Spacer = () => <Box py={5}></Box>;

export default function HomeScreen() {
  const hiringRef = useRef(null);

  const [isMuted, setIsMuted] = useState(true);
  const [popupOpen, setPopupOpen] = useState(false);

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
              <menu>
                <button
                  onClick={() => {
                    hiringRef.current.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Hiring Process
                </button>
                &nbsp; &nbsp; &nbsp;
                <button>Services</button>
                &nbsp; &nbsp; &nbsp;
                <button>Client Success</button>
                &nbsp; &nbsp; &nbsp;
                <Button variant="contained" color="error">
                  <Typography fontWeight="bold">Hire a talent</Typography>
                </Button>
              </menu>
            </Box>
          </Container>
        </header>
        <Spacer />
        <Container>
          <Grid2 container spacing={5}>
            <Grid2
              size={{ md: 6 }}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Box>
                <Typography fontSize={25} color="#CF2D31" fontWeight="bold">
                  SAVE UPTO 65% ON YOUR TECH TALENT
                </Typography>
                <br />
                <h1>Hire Top 1% Tech Talent</h1>
                <br />
                <br />
                <br />
                <button onClick={() => setPopupOpen(true)}>
                  <img
                    style={{ width: "16rem", margin: 0 }}
                    src="/black_btn.png"
                    alt="Image"
                  />
                </button>
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
            <br />
            <Typography color="white" variant="h5" fontWeight={200}>
              Save upto 50-70% cost compared to in-house hiring. Get matched
              with elite developers within 48 hours.
            </Typography>
            <br />
            <br />
            <br />
            <img src="/stats.png" alt="Image" />
            <br />
            <br />
            <br />
            <a href="#">
              <img
                style={{ width: "16rem", margin: 0 }}
                src="/white_btn.png"
                alt="Image"
              />
            </a>
          </Grid2>
        </Grid2>
      </section>
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
        <Grid2 container spacing={3}>
          <Grid2 size={{ md: 3, xs: 6 }}>
            <div className={style.testimonial_video}>
              <video controls>
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
              <video controls>
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
              <video controls>
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
              <video controls>
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
            style={{ width: "20rem" }}
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
                    <Box m={2}>
                      <Typography variant="h5" color="white">
                        Meghna
                      </Typography>
                      <Typography color="white">QA Engineer</Typography>
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
                    <Box m={2}>
                      <Typography variant="h5" color="white">
                        Manas
                      </Typography>
                      <Typography color="white" sx={{ opacity: "0.5" }}>
                        Java Developer
                      </Typography>
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
                    <Box m={2}>
                      <Typography variant="h5" color="white">
                        Prachi
                      </Typography>
                      <Typography color="white" sx={{ opacity: "0.5" }}>
                        Business Analyst
                      </Typography>
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
                    <Box m={2}>
                      <Typography variant="h5" color="white">
                        Mehak
                      </Typography>
                      <Typography color="white" sx={{ opacity: "0.5" }}>
                        Dot Net Developer
                      </Typography>
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
                    <Box m={2}>
                      <Typography variant="h5" color="white">
                        Rahul
                      </Typography>
                      <Typography color="white" sx={{ opacity: "0.5" }}>
                        Digital Marketer
                      </Typography>
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
        <br />
        <br />
        <Typography textAlign="center" color="grey">
          Power your team with top tech talent. Strategic tech talent partner :
          we recruit, vet, and empower your ideal team.
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
                style={{ width: "16rem" }}
                src="/black_btn.png"
                alt="Image"
              />
            </button>
          </Grid2>
        </Grid2>
      </section>
      <Box m={1}></Box>
      <img src="/office_location.png" alt="Image" />
      {popupOpen ? (
        <section className={style.popup_section}>
          <div className={style.popup}>
            <button onClick={() => setPopupOpen(false)}>
              <i class="fa-solid fa-xmark"></i>
            </button>
            <Grid2 container spacing={5}>
              <Grid2 size={{ md: 6 }}>
                <img
                  style={{ width: "75px", margin: 0 }}
                  src="/favicon.png"
                  alt="OVE Logo"
                />
                <br />
                <br />
                <Typography variant="h5">
                  <i
                    className="fa-solid fa-square-check"
                    style={{ color: "green" }}
                  ></i>
                  &nbsp; 70% saving on labour cost.
                </Typography>
                <br />
                <Typography variant="h5">
                  <i
                    className="fa-solid fa-square-check"
                    style={{ color: "green" }}
                  ></i>
                  &nbsp;No recruitment cost.
                </Typography>
                <br />
                <Typography variant="h5">
                  <i
                    className="fa-solid fa-square-check"
                    style={{ color: "green" }}
                  ></i>
                  &nbsp;No upfront Capital cost.
                </Typography>
                <br />
                <Typography variant="h5">
                  <i
                    className="fa-solid fa-square-check"
                    style={{ color: "green" }}
                  ></i>
                  &nbsp;One invoice. No hidden costs.
                </Typography>
                <br />
                <br />
                <img style={{ height: "5rem" }} src="/indeed.png" alt="Image" />
              </Grid2>
              <Grid2 size={{ md: 6 }}>
                <Typography variant="h4" fontWeight="bold" textAlign="center">
                  Talk to our experts
                </Typography>
                <br />
                <br />
                <TextField
                  value={name}
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
                  label="Phone"
                  color="error"
                  variant="standard"
                  placeholder="Enter Your Phone"
                  onChange={(e) => setPhone(e.target.value)}
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
                  fullWidth
                  multiline
                  required
                  rows={4}
                />
                <br />
                <br />
                <button onClick={handleSubmit}>
                  <img
                    style={{ width: "16rem", margin: 0 }}
                    src="/consultation_btn.png"
                    alt="Image"
                  />
                </button>
              </Grid2>
            </Grid2>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
}
