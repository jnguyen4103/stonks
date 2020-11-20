import { createMuiTheme } from "@material-ui/core/styles";
import { purple, grey } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[700],
    },
    secondary: {
      main: grey[800],
    },
  },
});

export default theme;
