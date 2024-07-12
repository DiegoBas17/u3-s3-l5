const initialState = {
  rockClassic: { content: [] },
  popCulture: { content: [] },
  hipHop: { content: [] },
};

const fetchTracksReducers = (state = initialState, action) => {
  switch (action.type) {
    case "ROCKCLASSIC":
      return {
        ...state,
        rockClassic: {
          ...state.rockClassic,
          content: action.payload,
        },
      };
    case "POPCULTURE":
      return {
        ...state,
        popCulture: {
          ...state.popCulture,
          content: action.payload,
        },
      };
    case "HIPHOP":
      return {
        ...state,
        hipHop: {
          ...state.hipHop,
          content: action.payload,
        },
      };
    default:
      return state;
  }
};

export default fetchTracksReducers;
