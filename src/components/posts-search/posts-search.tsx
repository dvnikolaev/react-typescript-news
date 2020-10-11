import { TextField } from "@material-ui/core";
import React from "react";

const SearchPost: React.FC<{
  search: string;
  setSearch(value: string): void;
}> = ({ search, setSearch }) => {
  return (
    <TextField
      variant="outlined"
      fullWidth
      label="Поиск"
      size="small"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchPost;
