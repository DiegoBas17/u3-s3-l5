import { ADD_TRACK } from "../action/action";

const initialState = {
  content: null /* oggetto */,
};

const trackSelectedReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TRACK:
      return {
        ...state,
        content: action.payload /* sostitiscimi l'oggetto */,
      };
    default:
      return state;
  }
};
export default trackSelectedReducer;
