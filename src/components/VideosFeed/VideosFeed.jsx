import React from "react";
import VideoElement from "./VideoElement/VideoElement";

export default ({ isFetchingVideos, videos }) => {
  if (isFetchingVideos) return <h1>Loading...</h1>;

  const videoElements = videos.map(
    (
      {
        publishedAt,
        id: { videoId },
        snippet: {
          title,
          description,
          thumbnails: {
            medium: { url: thumbnail },
          },
          channelTitle,
        },
      },
      index
    ) => (
      <VideoElement
        key={videoId}
        id={videoId}
        title={title}
        description={description}
        publishedAt={publishedAt}
        thumbnail={thumbnail}
        channelTitle={channelTitle}
      />
    )
  );

  return <div className="videos-feed">{videoElements}</div>;
};
