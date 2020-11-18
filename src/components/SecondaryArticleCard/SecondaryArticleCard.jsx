/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import React from "react";
import styles from "./styles";

const SecondaryArticleCard = (props) => {
  return (
    <Card css={styles.container}>
      <CardMedia image={props.props.image} css={styles.cardImage} />
      <div css={styles.details}>
        <CardContent css={styles.content}>
          <Typography variant="h6" component="h2">
            {props.props.title}
          </Typography>
          <Typography variant="subtitle2" component="p" color="textSecondary">
            John Doe • November 18, 2020
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
};

SecondaryArticleCard.propTypes = {
  props: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
};
export default SecondaryArticleCard;
