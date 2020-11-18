/** @jsxImportSource @emotion/react */
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";
import * as Dog from "images/wiener.jpeg";

const FeaturedArticleCard = () => {
  return (
    <Card>
      <CardMedia image={Dog.default} css={styles.cardImage} />
      <CardContent>
        <Typography variant="h5" component="h2">
          Dog
        </Typography>
        <Typography variant="body2" component="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default FeaturedArticleCard;
