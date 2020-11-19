/** @jsxImportSource @emotion/react */
import React from "react";
import SampleStockTickerData from "data/SampleStockTickerData";
import { Box, Card, Typography } from "@material-ui/core";
import styles from "./styles";
import { css } from "@emotion/react";

const HomePageTickerDisplay = () => {
  const tickerArray = Object.keys(SampleStockTickerData);

  const printWithComma = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const tickerContainer = (ticker) => {
    return (
      <Card css={styles.tickerCard} variant="outlined" raised={true}>
        <Box css={styles.tickerBoxColumn1}>
          <Typography
            css={styles.tickerName}
            variant="subtitle2"
            component="div"
          >
            {ticker.name}
          </Typography>
          <Typography variant="subtitle2" component="div">
            {printWithComma(ticker.value.toFixed(2))}
          </Typography>
        </Box>
        <Box css={styles.tickerBoxColumn2}>
          <Typography
            css={css`
              ${styles.tickerPercentChange}
              ${styles.displayTickerColor(ticker.percentChange)}
            `}
            variant="subtitle2"
            component="div"
          >
            {ticker.percentChange.toFixed(2)}%
          </Typography>
          <Typography
            css={styles.displayTickerColor(ticker.valueChange)}
            variant="subtitle2"
            component="div"
          >
            {printWithComma(ticker.valueChange.toFixed(2))}
          </Typography>
        </Box>
      </Card>
    );
  };

  return (
    <Box css={styles.tickerDisplay}>
      {tickerArray.map((arrayElement) =>
        tickerContainer(SampleStockTickerData[arrayElement])
      )}
    </Box>
  );
};

export default HomePageTickerDisplay;
