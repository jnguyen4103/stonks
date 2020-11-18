/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Box, Grid } from "@material-ui/core";
import React from "react";
import FeaturedArticleCard from "components/FeaturedArticleCard";
import SecondaryArticleCard from "components/SecondaryArticleCard";
import styles from "./styles";

const DetailsGrid = (props) => {
  const displaySecondaryArticles = () => {
    const secondaryArticlesKeys = Object.keys(props.props.secondaryArticles);
    return secondaryArticlesKeys.map((text) => (
      <Grid item xs={12} key={text} css={styles.articleCard}>
        <SecondaryArticleCard props={props.props.secondaryArticles[text]} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={5} css={styles.featuredCardContainer}>
        <FeaturedArticleCard props={props.props.featuredArticle} />
      </Grid>
      <Grid item xs={7}>
        <Box>{displaySecondaryArticles()}</Box>
      </Grid>
    </Grid>
  );
};

DetailsGrid.propTypes = {
  props: PropTypes.object,
  featuredArticle: PropTypes.object,
  secondaryArticles: PropTypes.object,
};

export default DetailsGrid;
