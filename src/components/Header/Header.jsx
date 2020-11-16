/** @jsxImportSource @emotion/react */
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import styles from "./styles";
import SearchBar from "components/SearchBar";

const Header = () => {
  return (
    <AppBar color="primary">
      <Toolbar css={styles.toolBar}>
        <Typography variant="h5" component="h1" css={styles.headerTypography}>
          <PetsIcon css={styles.headerIcon} />
          MarketFetch
        </Typography>
        <SearchBar />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
