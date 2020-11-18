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

const LandingPage = () => {
  const accordionHeaders = [
    "Website 1",
    "Website 2",
    "Website 3",
    "Website 4",
    "Website 5",
    "Website 6",
  ];

  const displayAccordions = () => {
    return accordionHeaders.map((text) => (
      <Accordion key={text} defaultExpanded={true}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{text}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <DetailsGrid />
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
