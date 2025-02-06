import { Container, Box, Button, Typography } from "@mui/material";

export const Header = () => {
  return (
    <header>
      <Container maxWidth="xl">
        <Box
          p={2}
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
            <a href="#">Hiring Process</a>
            &nbsp; &nbsp; &nbsp;
            <a href="#">Services</a>
            &nbsp; &nbsp; &nbsp;
            <a href="#">Pricing</a>
            &nbsp; &nbsp; &nbsp;
            <a href="#">Testimonials</a>
            &nbsp; &nbsp; &nbsp;
            <Button variant="contained" color="error">
              <Typography fontWeight="bold">Hire a talent</Typography>
            </Button>
          </menu>
        </Box>
      </Container>
    </header>
  );
};
