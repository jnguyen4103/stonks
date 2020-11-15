import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import Header from "./components/Header";
import theme from "./features/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
