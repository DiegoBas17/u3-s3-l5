import { combineReducers, configureStore } from "@reduxjs/toolkit";
import trackSelectedReducer from "../reducers/trackSelectedReducer";

const rootReducer = combineReducers({
  trackSelected: trackSelectedReducer,
});

const store = configureStore({
  reducer: rootReducer,
});
export default store;
