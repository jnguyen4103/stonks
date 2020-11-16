/** @jsxImportSource @emotion/react */
import React from "react";
import { InputAdornment } from "@material-ui/core";
import styles, { SearchBarInputBase } from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <SearchBarInputBase
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
