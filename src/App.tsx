import { createTheme, ThemeProvider } from "@mui/material";
import { darkThemeOptions } from "theme";
import { CssBaseline } from "@mui/material";
import Layout from "components/Layout";
import Pages from "pages";

function App() {
  const theme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Layout>
        <Pages />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
