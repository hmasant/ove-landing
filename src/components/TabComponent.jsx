import { useState } from "react";
import style from "./style.module.css";
import { Box, Grid2, Container, Typography, Button } from "@mui/material";

export const TabComponent = () => {
  const [tab, setTab] = useState(0);

  const data = [
    {
      heading: "SaaS & Software Products",
      content: `Leverage our expertise in software development 
      to create high-performing, scalable SaaS products.`,
    },
    {
      heading: "Custom Web App Development",
      content:
        "Bring your vision to life with our team of experienced developers specializing in custom web app development.",
    },
    {
      heading: "eCommerce Development",
      content:
        "Hire expert developers to create dynamic eCommerce platforms that drive conversions and scale your business.",
    },
    {
      heading: "Modernization & Migration Services",
      content:
        "Upgrade your digital infrastructure by hiring developers who specialize in modernization and migration services.",
    },
    {
      heading: "Digital Transformation Solutions",
      content:
        "Our developers deliver customized digital transformation solutions that align with your business goals.",
    },
    {
      heading: "Maintenance & Management",
      content:
        "Partner with skilled developers to handle all your app maintenance and management needs seamlessly.",
    },
    {
      heading: "UI/UX Design & Development",
      content:
        "Enhance your web and mobile apps with our intuitive, cutting-edge UI/UX solutions.",
    },
    {
      heading: "Mobile App Development",
      content:
        "Get high-performance, secure, and scalable mobile apps with user-focused designs.",
    },
    {
      heading: "API Development & Integration",
      content:
        "Get expert API integration services to ensure smooth communication between apps.",
    },
  ];

  return (
    <section className={style.tab_sec}>
      <div className={style.tab_grid}>
        {data.map((e, index) =>
          tab === index ? (
            <img
              key={index}
              alt={e.heading}
              onClick={() => setTab(index)}
              src={`/tab_${index + 1}_white.png`}
            />
          ) : (
            <img
              key={index}
              alt={e.heading}
              onClick={() => setTab(index)}
              src={`/tab_${index + 1}_red.png`}
            />
          )
        )}
      </div>
      <Box py={5}></Box>
      <Container>
        <Grid2 container spacing={10}>
          <Grid2 size={{ xs: 6 }}>
            <Typography variant="h3" fontWeight="bold" color="white">
              {data[tab].heading}
            </Typography>
            <br />
            <Typography color="white">{data[tab].content}</Typography>
            <br />
            <br />
            <Button variant="contained" color="error">
              <Typography variant="h6" fontWeight="bold">
                Know More &nbsp; <i class="fa-solid fa-angles-right"></i>
              </Typography>
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
            <img src="/tab_graphic.png" alt="Image" />
          </Grid2>
        </Grid2>
      </Container>
      <Box py={5}></Box>
    </section>
  );
};
