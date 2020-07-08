import React from "react";
import { Paper, TextField } from "@material-ui/core";

export default ({ searchQuery, onFormSubmit, onInputChange }) => {
  return (
    <Paper elevation={5} style={{ padding: "20px" }}>
      <form onSubmit={onFormSubmit}>
        <TextField
          fullWidth
          label="Search..."
          onChange={onInputChange}
          value={searchQuery}
        />
      </form>
    </Paper>
  );
};
