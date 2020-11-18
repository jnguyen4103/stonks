/** @jsxImportSource @emotion/react */
import { Grid } from "@material-ui/core";
import React from "react";
import FeaturedArticleCard from "components/FeaturedArticleCard";
import SecondaryArticleCard from "components/SecondaryArticleCard";

const DetailsGrid = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={5}>
        <FeaturedArticleCard />
      </Grid>
      <Grid item xs={7}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <SecondaryArticleCard />
          </Grid>
          <Grid item xs={12}>
            <SecondaryArticleCard />
          </Grid>
          <Grid item xs={12}>
            <SecondaryArticleCard />
          </Grid>
          <Grid item xs={12}>
            <SecondaryArticleCard />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DetailsGrid;
