/** @jsxImportSource @emotion/react */
import React from "react";
import { Button, InputAdornment, InputBase } from "@material-ui/core";
import styles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <InputBase
      css={styles.searchBar}
      endAdornment={
        <InputAdornment position="end">
          <Button disableRipple={true}>
            <SearchIcon css={styles.searchIcon} />
          </Button>
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
