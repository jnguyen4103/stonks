/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Grid,
  Box,
} from "@material-ui/core";
import Header from "components/Header";
import styles from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DetailsGrid from "components/DetailsGrid";
import SampleArticles from "data/SampleArticles";
import SearchBar from "components/SearchBar";

const HomePage = () => {
  const websitesArray = Object.keys(SampleArticles);

  const displayAccordions = () => {
    return websitesArray.map((text) => (
      <Accordion key={text} defaultExpanded={true} css={styles.accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>
            <Box fontWeight="fontWeightBold">
              {SampleArticles[text].siteName}
            </Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DetailsGrid props={SampleArticles[text]} />
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <React.Fragment>
      <Header />
      <div css={styles.toolbar} />
      <Container maxWidth="lg" css={styles.container}>
        <Grid container>
          <Grid item xs={3}></Grid>
          <Grid item xs={6}>
            <SearchBar />
          </Grid>
          <Grid item xs={3}></Grid>
        </Grid>
        {displayAccordions()}
      </Container>
    </React.Fragment>
  );
};

export default HomePage;
