import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  cardImage: css`
    height: 350px;
  `,
  cardStyle: css`
    :hover {
      cursor: pointer;
      border-bottom: 4px solid ${theme.palette.primary.main};
      filter: brightness(0.95);
    }
    height: 100%;
    position: relative;
    overflow-y: auto;
  `,
  cardContent: css`
    position: absolute;
  `,
};

export default styles;
