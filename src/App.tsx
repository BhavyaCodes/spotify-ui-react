import { createTheme, ThemeProvider } from "@mui/material";
import { darkThemeOptions } from "theme";
import { CssBaseline } from "@mui/material";
import Layout from "components/Layout";
import Pages from "pages";
import { BrowserRouter } from "react-router-dom";

function App() {
  const theme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Pages />
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
