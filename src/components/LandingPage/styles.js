import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  container: css`
    margin-top: ${theme.spacing(3)}px;
  `,
  toolbar: css`
    ${theme.mixins.toolbar},
  `,
  searchBarBox: css`
    display: flex;
    align-items: center;
  `,
};

export default styles;
