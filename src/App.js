import React from "react";
import "./App.css";
import { Grid, TextField, Paper } from "@material-ui/core";
import { Route } from "react-router-dom";
import SearchBarContainer from "./components/SearchBar/SearchBarContainer";
import VideosFeedContainer from "./components/VideosFeed/VideosFeedContainer";
import VideoDisplay from "./components/VideoDisplay/VideoDisplay";

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
        <Route path="/video/:videoId" render={() => <VideoDisplay />} />
      </Grid>
    </div>
  );
}

export default App;
