import {
  SET_VIDEOS,
  TOGGLE_IS_FETCHING_VEIDOS,
  TOGGLE_IS_FETCHING_RELATED,
  SET_RELATED_VIDEOS,
} from "./types";
import { youtubeAPI } from "../api/youtube";

const initialState = {
  videos: [],
  related: [],
  isFetchingVideos: false,
  isFetchingRelated: false,
};

export const videosReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TOGGLE_IS_FETCHING_VEIDOS:
      return {
        ...state,
        isFetchingVideos: !state.isFetchingVideos,
      };
    case SET_VIDEOS:
      return {
        ...state,
        videos: payload,
      };
    case SET_RELATED_VIDEOS:
      return {
        ...state,
        related: payload,
      };
    case TOGGLE_IS_FETCHING_RELATED:
      return {
        ...state,
        isFetchingRelated: !state.isFetchingRelated,
      };
    default:
      return state;
  }
};

// Actions
export const setVideos = (videos) => ({ type: SET_VIDEOS, payload: videos });
export const toggleIsFetchingVideos = () => ({
  type: TOGGLE_IS_FETCHING_VEIDOS,
});
export const toggleIsFetchingRelated = () => ({
  type: TOGGLE_IS_FETCHING_RELATED,
});
export const setRelatedVideos = (relatedVideos) => ({
  type: SET_RELATED_VIDEOS,
  payload: relatedVideos,
});

// Thunks
export const getVideosFeed = (query) => async (dispatch) => {
  dispatch(toggleIsFetchingVideos());
  const response = await youtubeAPI.getSearchResults(query);
  dispatch(setVideos(response.data.items));
  dispatch(toggleIsFetchingVideos());
};

export const getRelatedVideos = (videoId) => async (dispatch) => {
  dispatch(toggleIsFetchingRelated());
  const response = await youtubeAPI.getRelatedVideos(videoId);
  dispatch(setRelatedVideos(response.data.items));
  dispatch(toggleIsFetchingRelated());
};
