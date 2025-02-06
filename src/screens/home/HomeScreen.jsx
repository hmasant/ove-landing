import style from "./style.module.css";
import { Header } from "../../components/header";
import { Box, Container, Grid2, Typography } from "@mui/material";

export default function HomeScreen() {
  return (
    <>
      <section className={style.hero_sec}>
        <Header />
        <br />
        <br />
        <br />
        <br />
        <Container>
          <Grid2 container spacing={5}>
            <Grid2 size={{ sm: 6 }}>
              <Typography color="red" fontWeight="medium" letterSpacing={5}>
                WITH OVE IT'S FAST & EASY
              </Typography>
              <h1>Hire top product & engineering talents</h1>
            </Grid2>
            <Grid2 size={{ sm: 6 }}>
              <Box display="flex" justifyContent="center">
                <Typography fontWeight="bold">4.5+ Rating</Typography>
                &nbsp; &nbsp;
                <Typography color="gold">
                  <i className="fa-solid fa-star"></i>
                  &nbsp;
                  <i className="fa-solid fa-star"></i>
                  &nbsp;
                  <i className="fa-solid fa-star"></i>
                  &nbsp;
                  <i className="fa-solid fa-star"></i>
                </Typography>
              </Box>
              <br />
              <img
                style={{ width: "20rem" }}
                src="/rating_logos.png"
                alt="Image"
              />
              <br />
              <br />
              <img
                style={{ width: "30rem" }}
                src="/partnerships.png"
                alt="OVE Partnerships"
              />
            </Grid2>
          </Grid2>
        </Container>
        <br />
        <br />
        <div className={style.hero_video}>
          <Grid2 container spacing={5}>
            <Grid2 size={{ sm: 1 }}></Grid2>
            <Grid2 size={{ sm: 5 }}>
              <Typography variant="h6" fontWeight="bold">
                Heading Goes Here
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
              <br />
              <Typography variant="h6" fontWeight="bold">
                Heading Goes Here
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
              <br />
              <Typography variant="h6" fontWeight="bold">
                Heading Goes Here
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
              <br />
              <Typography variant="h6" fontWeight="bold">
                Heading Goes Here
              </Typography>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </Typography>
            </Grid2>
            <Grid2 size={{ sm: 5 }}>
              <img
                style={{ aspectRatio: 1, width: "30vw" }}
                src="/hero_video.png"
                alt="Image"
              />
            </Grid2>
            <Grid2 size={{ sm: 1 }}></Grid2>
            <br />
          </Grid2>
        </div>
      </section>
    </>
  );
}
