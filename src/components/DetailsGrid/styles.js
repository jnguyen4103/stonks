import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  secondaryArticleCard: css`
    margin-bottom: ${theme.spacing(3)}px;
    :last-child {
      margin-bottom: 0;
    }
  `,
};

export default styles;
