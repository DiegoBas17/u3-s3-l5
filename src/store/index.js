import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackSelectedReducer from "../reducers/trackSelectedReducer";
import favoriteTracksReducer from "../reducers/favoriteTracksReducer";
import fetchTracksReducers from "../reducers/fetchTracksReducer";

const rootReducer = combineReducers({
  trackSelected: trackSelectedReducer,
  favoriteTracks: favoriteTracksReducer,
  fetchTracks: fetchTracksReducers,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
