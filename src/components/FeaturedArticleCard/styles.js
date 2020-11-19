import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  cardImage: css`
    height: 350px;
  `,
  cardStyle: css`
    :hover {
      cursor: pointer;
      box-shadow: 0 4px ${theme.palette.primary.main};
      filter: brightness(0.95);
    }
    height: 100%;
    position: relative;
    overflow-y: auto;
  `,
  cardTitle: css`
    font-weight: bold;
  `,
  cardContent: css`
    position: absolute;
  `,
};

export default styles;
