import { Theme } from "./utils/theme";
import { Router } from "./utils/router";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Partytown } from "@builder.io/partytown/react";
import { ThemeProvider, CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
  <>
    <Partytown lib="/~partytown/" forward={["dataLayer.push"]} />
    <ThemeProvider theme={Theme}>
      <CssBaseline />
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
  </>
);
