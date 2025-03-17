import { createTheme, responsiveFontSizes } from "@mui/material";

export let Theme = createTheme({ typography: { fontFamily: "Noto Sans" } });

Theme = responsiveFontSizes(Theme);
