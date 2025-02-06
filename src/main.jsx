import { Theme } from "./utils/theme";
import { Router } from "./utils/router";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={Theme}>
    <CssBaseline />
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  </ThemeProvider>
);
