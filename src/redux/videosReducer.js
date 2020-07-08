import { SET_VIDEOS, TOGGLE_IS_FETCHING_VEIDOS } from "./types";
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
    default:
      return state;
  }
};

// Actions
export const setVideos = (videos) => ({ type: SET_VIDEOS, payload: videos });
export const toggleIsFetchingVideos = () => ({
  type: TOGGLE_IS_FETCHING_VEIDOS,
});

// Thunks
export const getVideosFeed = (query) => async (dispatch) => {
  dispatch(toggleIsFetchingVideos());
  const response = await youtubeAPI.getSearchResults(query);
  dispatch(setVideos(response.data.items));
  dispatch(toggleIsFetchingVideos());
};
