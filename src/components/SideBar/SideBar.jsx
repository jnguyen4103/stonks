/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import styles, { SideBarButton } from "./styles";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import DarkModeButton from "features/DarkModeButton/DarkModeButton";

const SideBar = (props) => {
  const drawerButtonNames = ["Top Gains", "Top Losses", "Popular Stocks"];
  const drawerButtonIcons = [
    <TrendingUpIcon key={drawerButtonNames[0]} />,
    <TrendingDownIcon key={drawerButtonNames[1]} />,
    <WhatshotIcon key={drawerButtonNames[2]} />,
  ];
  return (
    <Drawer
      variant="temporary"
      anchor="right"
      open={props.props.state}
      onClose={() => {
        props.props.setState(false);
      }}
    >
      <Box css={styles.drawerBox}>
        <DarkModeButton />
        <List>
          {drawerButtonNames.map((text, index) => (
            <SideBarButton button key={text}>
              <ListItemIcon css={styles.listItemButton}>
                {drawerButtonIcons[index]}
              </ListItemIcon>
              <ListItemText primary={text} css={styles.listItemButton} />
            </SideBarButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

SideBar.propTypes = {
  props: PropTypes.object,
  state: PropTypes.bool,
  setState: PropTypes.func,
};

export default SideBar;
