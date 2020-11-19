import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  cardImage: css`
    height: 350px;
  `,
  clickableCard: css`
    align-items: flex-start;
    :hover {
      cursor: pointer;
      border-bottom: 4px solid ${theme.palette.primary.main};
      filter: brightness(0.95);
    }
  `,
};

export default styles;
