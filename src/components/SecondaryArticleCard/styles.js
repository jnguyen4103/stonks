import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  container: css`
    display: flex;
    :hover {
      cursor: pointer;
      box-shadow: 4px 0 ${theme.palette.primary.main};
      filter: brightness(0.95);
    }
  `,
  cardTitle: css`
    font-weight: bold;
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
