import { createStore, applyMiddleware } from "redux";
import globalReducer from "./globalReducer";
import thunkMiddleware from "redux-thunk";

export const store = createStore(
  globalReducer,
  applyMiddleware(thunkMiddleware)
);
export default store;
