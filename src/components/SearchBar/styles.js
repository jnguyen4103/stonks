import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  searchBar: css`
    border-radius: 4px;
    width: 100%;
    display: flex;
    align-items: center;
    padding: ${theme.spacing(2)}px;
  `,
  searchIcon: css`
    fill: ${theme.palette.primary.main};
    padding-right: ${theme.spacing(1)}px;
  `,
  input: css`
    font-size: ${theme.typography.body1};
    ::placeholder {
      color: gray;
    }
    width: 100%;
    border-color: transparent;
  `,
};

export default styles;
