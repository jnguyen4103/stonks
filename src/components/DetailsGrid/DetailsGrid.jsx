/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Grid } from "@material-ui/core";
import React from "react";
import FeaturedArticleCard from "components/FeaturedArticleCard";
import SecondaryArticleCard from "components/SecondaryArticleCard";

const DetailsGrid = (props) => {
  const displaySecondaryArticles = () => {
    const secondaryArticlesKeys = Object.keys(props.props.secondaryArticles);
    return secondaryArticlesKeys.map((text) => (
      <Grid item xs={12} key={text}>
        <SecondaryArticleCard props={props.props.secondaryArticles[text]} />
      </Grid>
    ));
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={5}>
        <FeaturedArticleCard props={props.props.featuredArticle} />
      </Grid>
      <Grid container spacing={3} item xs={7}>
        {displaySecondaryArticles()}
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
