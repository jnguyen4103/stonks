/** @jsxImportSource @emotion/react */
import React from "react";
import { InputAdornment, InputBase, Box } from "@material-ui/core";
import styles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Box css={styles.searchBar} boxShadow={3}>
      <InputBase
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon css={styles.searchIcon} />
          </InputAdornment>
        }
        variant="outlined"
        placeholder="Search for stocks by name or ticker symbol"
        fullWidth={true}
        css={styles.input}
      />
    </Box>
  );
};

export default SearchBar;
