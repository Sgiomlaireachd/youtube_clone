import { combineReducers } from "redux";
import { searchReducer } from "./searchReducer";
import { videosReducer } from "./videosReducer";

export default combineReducers({
  search: searchReducer,
  videos: videosReducer,
});
