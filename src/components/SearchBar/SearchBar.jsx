/** @jsxImportSource @emotion/react */
import React from "react";
import { InputAdornment, InputBase } from "@material-ui/core";
import styles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <InputBase
      css={styles.searchBar}
      placeholder="Search"
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon css={styles.searchIcon} />
        </InputAdornment>
      }
    />
  );
};

export default SearchBar;
