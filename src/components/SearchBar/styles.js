import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  searchBar: css`
    border-radius: 4px;
    width: 100%;
    padding: ${theme.spacing(1)}px;
  `,
  searchIcon: css`
    fill: ${theme.palette.primary.main};
  `,
  input: css`
    font-size: ${theme.typography.h6};
  `,
};

export default styles;
