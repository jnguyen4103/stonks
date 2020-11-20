/** @jsxImportSource @emotion/react */
import React from "react";
import { Box } from "@material-ui/core";
import styles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Box css={styles.searchBar} boxShadow={3}>
      <SearchIcon css={styles.searchIcon} />
      <input
        placeholder="Search for stocks by name or ticker symbol"
        css={styles.input}
      />
    </Box>
  );
};

export default SearchBar;
