import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  container: css`
    display: flex;
    :hover {
      cursor: pointer;
      border-right: 4px solid ${theme.palette.primary.main};
      filter: brightness(0.95);
    }
  `,
  cardImage: css`
    max-width: 100%;
    max-height: 100%;
  `,
  imageContainer: css`
    display: flex;
  `,
  cardActionArea: css``,
};

export default styles;
