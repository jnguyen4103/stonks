import { css } from "@emotion/react";
import theme from "features/Theme";

const styles = {
  tickerCard: css`
    display: flex;
    border-radius: 4px;
    padding: ${theme.spacing(1)}px;
    :hover {
      cursor: pointer;
      border-bottom: 2px solid ${theme.palette.primary.main};
      filter: brightness(0.95);
    }
  `,
  tickerBoxColumn1: css`
    margin-right: ${theme.spacing(3)}px;
  `,
  tickerBoxColumn2: css`
    text-align: right;
  `,
  tickerDisplay: css`
    display: flex;
    justify-content: space-between;
  `,
  tickerName: css`
    font-weight: bold;
  `,
  tickerPercentChange: css`
    font-weight: bold;
  `,
  displayTickerColor: (value) => {
    if (value > 0) {
      return css`
        color: green;
      `;
    } else {
      return css`
        color: red;
      `;
    }
  },
};

export default styles;
