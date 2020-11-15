/** @jsxImportSource @emotion/react */
import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import PetsIcon from "@material-ui/icons/Pets";
import styles from "./styles";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="h1">
          <PetsIcon css={styles.headerIcon}/>
          MarketFetch
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
