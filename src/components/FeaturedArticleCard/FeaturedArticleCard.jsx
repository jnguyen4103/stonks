/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";

const FeaturedArticleCard = (props) => {
  return (
    <Card>
      <CardMedia image={props.props.image} css={styles.cardImage} />
      <CardContent css={styles.cardContent}>
        <Typography variant="h5" component="h2">
          {props.props.title}
        </Typography>
        <Typography variant="subtitle2" component="p" color="textSecondary">
          John Doe • November 18, 2020
        </Typography>
        <Typography variant="body1" component="p">
          {props.props.body}
        </Typography>
      </CardContent>
    </Card>
  );
};

FeaturedArticleCard.propTypes = {
  props: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string,
};
export default FeaturedArticleCard;
