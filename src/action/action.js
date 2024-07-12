export const ADD_TRACK = "ADD_TRACK";
export const ADD_FAVORITE = " ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const fetchTracksAction = (artistName, actionType) => {
  return async (dispatch) => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +
          artistName
      );
      if (response.ok) {
        let { data } = await response.json();
        let arrayFourTracks = [];
        for (let i = 0; i < 4; i++) {
          arrayFourTracks.push(data[i]);
        }
        if (actionType === "SEARCH") {
          dispatch({
            type: actionType,
            payload: data,
          });
        } else {
          dispatch({
            type: actionType,
            payload: arrayFourTracks,
          });
        }
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };
};
