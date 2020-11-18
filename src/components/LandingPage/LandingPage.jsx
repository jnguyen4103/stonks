/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Box,
} from "@material-ui/core";
import Header from "components/Header";
import styles from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DetailsGrid from "components/DetailsGrid";
import SampleArticles from "data/SampleArticles";
import SearchBar from "components/SearchBar";

const LandingPage = () => {
  const websitesArray = Object.keys(SampleArticles);

  const displayAccordions = () => {
    return websitesArray.map((text) => (
      <Accordion key={text} defaultExpanded={true} css={styles.accordionStyle}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{SampleArticles[text].siteName}</Typography>
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
        <Box css={styles.searchBarBox}>
          <SearchBar />
        </Box>
        {displayAccordions()}
      </Container>
    </React.Fragment>
  );
};

export default LandingPage;
