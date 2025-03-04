/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import PetsIcon from "@material-ui/icons/Pets";
import styles from "./styles";
import SideBar from "components/SideBar/SideBar";

const Header = () => {
  const [sideBarState, setSideBarState] = useState(false);
  const displaySideBar = () => {
    const sideBarProps = {
      state: sideBarState,
      setState: setSideBarState,
    };
    return <SideBar props={sideBarProps} />;
  };
  return (
    <AppBar color="primary">
      <Toolbar css={styles.toolBar}>
        <Typography variant="h5" component="h1" css={styles.headerTypography}>
          <PetsIcon css={styles.headerIcon} />
          MarketFetch
        </Typography>
        <IconButton
          onClick={() => {
            setSideBarState(!sideBarState);
          }}
        >
          <MenuRoundedIcon css={styles.menuIcon} />
        </IconButton>
        {displaySideBar()}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
