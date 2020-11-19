import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "features/Theme";
import HomePage from "components/HomePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <HomePage />
      </div>
    </ThemeProvider>
  );
}

export default App;
