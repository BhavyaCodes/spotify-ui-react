import { createTheme, ThemeProvider } from "@mui/material";
import { darkThemeOptions } from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  );
}

export default App;
