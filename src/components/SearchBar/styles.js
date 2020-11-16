import { css } from "@emotion/react";
import { InputBase, withStyles } from "@material-ui/core";
import theme from "features/Theme";

const styles = {
  searchBar: css`
    background-color: ${theme.palette.primary.dark};
    padding-left: ${theme.spacing(1)}px;
    padding-right: ${theme.spacing(4)}px;
    border-radius: 5px;
  `,
  searchIcon: css`
    fill: ${theme.palette.primary.contrastText};
  `,
};

export const SearchBarInputBase = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
    "&$focused": {
      backgroundColor: theme.palette.primary.light,
    },
  },
  focused: {},
}))(InputBase);

export default styles;
