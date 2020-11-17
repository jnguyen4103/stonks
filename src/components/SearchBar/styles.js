import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  searchBar: css`
    background-color: ${theme.palette.primary.dark};
    padding-left: ${theme.spacing(1)}px;
    padding-right: ${theme.spacing(4)}px;
    border-radius: 5px;
    :hover {
      background-color: ${theme.palette.primary.light};
    }
  `,
  searchIcon: css`
    fill: ${theme.palette.primary.contrastText};
  `,
};

export default styles;
