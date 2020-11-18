import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  articleCard: css`
    padding-bottom: ${theme.spacing(3)}px;
    :last-child {
      padding-bottom: 0;
    }
  `,
  featuredCardContainer: css`
    display: flex;
  `,
};

export default styles;
