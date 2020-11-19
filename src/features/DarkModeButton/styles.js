import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  darkModeBox: css`
    display: inline-flex;
    align-items: center;
    margin-top: ${theme.spacing(1)}px;
  `,
  sunIcon: css`
    color: ${theme.palette.primary.contrastText};
  `,
  moonIcon: css`
    color: ${theme.palette.secondary.main};
  `,
};

export default styles;
