import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action/action";

const initialState = {
  content: [],
};

const favoriteTracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        content: [...state.content, action.payload],
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        content: state.content.filter((track) => track.id !== action.payload),
      };
    default:
      return state;
  }
};
export default favoriteTracksReducer;
