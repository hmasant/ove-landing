import { Box, Typography, Button } from "@mui/material";

export default function ThankyouScreen() {
  return (
    <Box
      height="100vh"
      display="flex"
      textAlign="center"
      bgcolor="lightblue"
      alignItems="center"
      justifyContent="center"
    >
      <Box p={5} width="60vw" boxShadow={10} bgcolor="white" borderRadius={5}>
        <img src="/logo_black.png" alt="Logo" style={{ height: "5rem" }} />
        <br />
        <br />
        <Typography variant="h4" fontWeight="bold">
          Thank you!
        </Typography>
        <br />
        <Typography>
          Thanks for your query. Our representative will get in touch with you
          soon.
        </Typography>
        <br />
        <br />
        <a href="/">
          <Button variant="contained" color="error">
            <i class="fa-solid fa-house"></i> &nbsp; &nbsp; Go Back to home
          </Button>
        </a>
      </Box>
    </Box>
  );
}
