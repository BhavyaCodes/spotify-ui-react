import logo from "./logo.svg";
import { createTheme, ThemeProvider } from "@mui/material";
import { darkThemeOptions } from "./theme";
import { CssBaseline } from "@mui/material";

function App() {
  const theme = createTheme(darkThemeOptions);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
