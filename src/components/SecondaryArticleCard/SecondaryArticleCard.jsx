/** @jsxImportSource @emotion/react */
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import React from "react";
import * as Cat from "images/russianblue.jpeg";
import styles from "./styles";

const SecondaryArticleCard = () => {
  return (
    <Card css={styles.container}>
      <CardMedia image={Cat.default} css={styles.cardImage} />
      <div css={styles.details}>
        <CardContent css={styles.content}>
          <Typography component="h2" variant="h6">
            Cat
          </Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

export default SecondaryArticleCard;
