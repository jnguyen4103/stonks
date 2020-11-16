/** @jsxImportSource @emotion/react */
import PropTypes from "prop-types";
import { Box, Drawer } from "@material-ui/core";
import React from "react";

const SideBar = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.props.state}
      onClose={() => {
        props.props.setState(false);
      }}
    >
      <Box>TODO: ADD STUFF HERE</Box>
    </Drawer>
  );
};

SideBar.propTypes = {
  props: PropTypes.object,
  state: PropTypes.bool,
  setState: PropTypes.func,
};

export default SideBar;
