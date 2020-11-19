import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  container: css`
    margin-top: ${theme.spacing(3)}px;
  `,
  toolbar: css`
    ${theme.mixins.toolbar},
  `,
  searchBarGrid: css`
    margin-top: ${theme.spacing(3)}px;
  `,
  accordionTitle: css`
    font-weight: bold;
  `,
};

export default styles;
