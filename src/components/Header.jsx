import { Container, Box, Button, Typography } from "@mui/material";

export const Header = () => {
  return (
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
                window.scrollIntoView("#hiring", { behavior: "smooth" });
              }}
            >
              Hiring Process
            </button>
            &nbsp; &nbsp; &nbsp;
            <a href="#">Services</a>
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
