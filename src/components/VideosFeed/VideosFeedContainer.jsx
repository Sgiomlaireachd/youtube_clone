import VideosFeed from "./VideosFeed";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    videos: state.videos.videos,
    isFetchingVideos: state.videos.isFetchingVideos,
  };
};

export default connect(mapStateToProps)(VideosFeed);
