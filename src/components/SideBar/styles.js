import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  drawerBox: css`
    background-color: ${theme.palette.primary.main};
    height: 100%;
    text-align: center;
  `,
  listItem: css`
    color: ${theme.palette.primary.contrastText};
  `,
  listItemButton: css`
    border-radius: 4px;
    :hover {
      background-color: ${theme.palette.primary.light};
    }
  `,
};

export default styles;
