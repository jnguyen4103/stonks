/** @jsxImportSource @emotion/react */
import React from "react";
import {
  Container,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
} from "@material-ui/core";
import Header from "components/Header";
import styles from "./styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DetailsGrid from "components/DetailsGrid";
import SampleArticles from "data/SampleArticles";

const LandingPage = () => {
  const websitesArray = Object.keys(SampleArticles);

  const displayAccordions = () => {
    return websitesArray.map((text) => (
      <Accordion key={text} defaultExpanded={true}>
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
      <Container maxWidth="lg">{displayAccordions()}</Container>
    </React.Fragment>
  );
};

export default LandingPage;
