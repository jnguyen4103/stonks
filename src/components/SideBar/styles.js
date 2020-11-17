import { css } from "@emotion/react";
import { ListItem, withStyles } from "@material-ui/core";
import theme from "features/Theme";

const styles = {
  drawerBox: css`
    background-color: ${theme.palette.primary.main};
    height: 100%;
    text-align: center;
  `,
  listItemButton: css`
    color: ${theme.palette.primary.contrastText};
  `,
};

export const SideBarButton = withStyles((theme) => ({
  root: {
    "&:hover": {
      backgroundColor: theme.palette.primary.light,
    },
  },
}))(ListItem);

export default styles;
