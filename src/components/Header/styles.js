import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  headerIcon: css`
    padding-right: ${theme.spacing(1)}px;
  `,
  toolBar: css`
    align-items: center;
  `,
  headerTypography: css`
    flex: 1;
    color: ${theme.palette.primary.contrastText};
  `,
  menuIcon: css`
    color: ${theme.palette.primary.contrastText};
  `,
};

export default styles;
