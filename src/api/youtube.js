import * as axios from "axios";

export const baseParams = {
  part: "snippet",
  key: process.env.REACT_APP_API_KEY,
  maxResults: 5,
  type: "video",
};

const axiosInstance = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/",
});

export const youtubeAPI = {
  getSearchResults: async (searchQuery) => {
    return await axiosInstance.get("search", {
      params: {
        ...baseParams,
        q: searchQuery,
      },
    });
  },
  getRelatedVideos: async (videoId) => {
    return await axiosInstance.get("search", {
      params: {
        ...baseParams,
        relatedToVideosId: videoId,
      },
    });
  },
};
