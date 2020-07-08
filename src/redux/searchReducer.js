import { SET_SEARCH_QUERY } from "./types";

const initialState = {
  searchQuery: "",
};

export const searchReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: payload,
      };
    default:
      return state;
  }
};

// Actions

export const setSearchQuery = (query) => ({
  type: SET_SEARCH_QUERY,
  payload: query,
});

// Thunks
