import { useState } from "react";
import style from "./style.module.css";
import { Box, Grid2, Container, Typography, Button } from "@mui/material";

export const TabComponent = () => {
  const [tab, setTab] = useState(0);

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
      adapt to evolving digital trends and customer expectations.
`,
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
      that drive engagement and growth.
`,
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
    <section className={style.tab_sec}>
      <div className={style.tab_grid}>
        {data.map((e, index) =>
          tab === index ? (
            <img
              key={index}
              alt={e.heading}
              onClick={() => setTab(index)}
              src={`/tab_${index}_white.png`}
            />
          ) : (
            <img
              key={index}
              alt={e.heading}
              onClick={() => setTab(index)}
              src={`/tab_${index}_red.png`}
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
            <br />
            <Typography color="white">{data[tab].content}</Typography>
            <br />
            <br />
            <br />
            <br />
            <Button variant="contained" color="error">
              <Typography variant="h6" fontWeight="bold">
                Know More &nbsp; <i className="fa-solid fa-angles-right"></i>
              </Typography>
            </Button>
          </Grid2>
          <Grid2 size={{ xs: 6 }}>
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
  );
};
