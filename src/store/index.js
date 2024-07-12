import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackSelectedReducer from "../reducers/trackSelectedReducer";
import favoriteTracksReducer from "../reducers/favoriteTracksReducer";

const rootReducer = combineReducers({
  trackSelected: trackSelectedReducer,
  favoriteTracks: favoriteTracksReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
