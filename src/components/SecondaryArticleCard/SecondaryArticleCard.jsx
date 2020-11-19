/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Card, CardContent, Typography, Grid, Box } from "@material-ui/core";
import React from "react";
import styles from "./styles";

const SecondaryArticleCard = (props) => {
  return (
    <Card css={styles.container}>
      <Grid container>
        <Grid item xs={4} css={styles.imageContainer}>
          <img src={props.props.image} css={styles.cardImage} />
        </Grid>
        <Grid item xs={8}>
          <CardContent>
            <Typography variant="h6" component="h2">
              <Box fontWeight="fontWeightBold">{props.props.title}</Box>
            </Typography>
            <Typography
              variant="subtitle2"
              component="h3"
              color="textSecondary"
            >
              John Doe • November 18, 2020
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </Card>
  );
};

SecondaryArticleCard.propTypes = {
  props: PropTypes.object,
  image: PropTypes.string,
  title: PropTypes.string,
};
export default SecondaryArticleCard;
