import { createTheme, ThemeProvider } from "@mui/material";
import { darkThemeOptions } from "./theme";
import { CssBaseline } from "@mui/material";
import Pages from "./pages";

function App() {
  const theme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
