import React from "react";
import { withRouter } from "react-router-dom";
import { Grid } from "@material-ui/core";
import RelatedVideosContainer from "./RelatedVideos/RelatedVideosContainer";

const VideoDisplay = ({ match }) => {
  const videoId = match.params.videoId;
  return (
    <Grid container item spacing={5} justify="center">
      <Grid item xs={7} style={{ height: "600px" }}>
        <iframe
          allowFullScreen
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video"
          frameBorder="none"
        ></iframe>
      </Grid>
      <Grid item xs={3}>
        <RelatedVideosContainer />
      </Grid>
    </Grid>
  );
};

export default withRouter(VideoDisplay);
