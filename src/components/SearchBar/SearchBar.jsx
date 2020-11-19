/** @jsxImportSource @emotion/react */
import React from "react";
import { InputAdornment, InputBase, Card } from "@material-ui/core";
import styles from "./styles";
import SearchIcon from "@material-ui/icons/Search";

const SearchBar = () => {
  return (
    <Card css={styles.searchBar}>
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
    </Card>
  );
};

export default SearchBar;
