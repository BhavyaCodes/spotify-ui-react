import { ThemeOptions } from "@mui/material";

export const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#1DB954",
      light: "rgb(74, 199, 118)",
      dark: "rgb(20, 129, 58)",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
    grey: {
      600: "#B2B2B2",
    },
    text: {
      secondary: "#B2B2B2",
    },
  },
  typography: {
    fontFamily: `"Circular Std Book", "Helvetica", "Arial", sans-serif`,
  },
};
