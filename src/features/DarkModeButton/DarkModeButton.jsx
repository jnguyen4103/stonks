/** @jsxImportSource @emotion/react */
import { Box, Switch } from "@material-ui/core";
import React from "react";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import Brightness2Icon from "@material-ui/icons/Brightness2";
import styles from "./styles";

const DarkModeButton = () => {
  return (
    <Box css={styles.darkModeBox}>
      <WbSunnyIcon fontSize="large" css={styles.sunIcon} />
      <Switch disableRipple={true} />
      <Brightness2Icon ontSize="large" css={styles.moonIcon} />
    </Box>
  );
};

export default DarkModeButton;
