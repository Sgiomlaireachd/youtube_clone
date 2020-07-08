import React, { useEffect } from "react";
import { compose } from "redux";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getRelatedVideos } from "../../../redux/videosReducer";
import RelatedVideos from "./RelatedVideos";

const RelatedVideosContainer = ({
  match,
  getRelatedVideos,
  relatedVideos,
  isFetchingRelated,
}) => {
  useEffect(() => {
    const videoId = match.params.videoId;
    getRelatedVideos(videoId);
  }, []);

  if (isFetchingRelated) return <h1>Loading...</h1>;

  return <RelatedVideos videos={relatedVideos} />;
};

const mapStateToProps = (state) => ({
  relatedVideos: state.videos.related,
  isFetchingRelated: state.videos.isFetchingRelated,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { getRelatedVideos })
)(RelatedVideosContainer);
