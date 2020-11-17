import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  searchBar: css`
    background-color: ${theme.palette.primary.light};
    padding-left: ${theme.spacing(2)}px;
    border-radius: 5px;
    :hover {
      background-color: ${theme.palette.primary.contrastText};
    }
    :focus-within {
      background-color: ${theme.palette.primary.contrastText};
    }
  `,
  searchIcon: css`
    fill: ${theme.palette.primary.dark};
  `,
};

export default styles;
