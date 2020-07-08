import React from "react";
import "./App.css";
import { Grid, TextField, Paper } from "@material-ui/core";
import { Route } from "react-router-dom";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import VideosFeedContainer from "./components/VideosFeed/VideosFeedContainer";

function App() {
  return (
    <div className="App">
      <Grid justify="center" container spacing={5}>
        <Grid item xs={11}>
          <SearchBarContainer />
        </Grid>
        <Route
          exact
          path="/"
          render={() => (
            <Grid item xs={11}>
              <VideosFeedContainer />
            </Grid>
          )}
        />
        {/* <Grid container spacing={2} xs={12}>
          <Paper style={{ height: "100px", width: "100%" }} elevation={5}>
            <TextField value="TEST" />
          </Paper>
        </Grid> */}

        {/* <Route exact to="/" render={() => } /> */}
      </Grid>
    </div>
  );
}

export default App;
