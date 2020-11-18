import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "features/Theme";
import LandingPage from "components/LandingPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
