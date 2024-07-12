import { useDispatch, useSelector } from "react-redux";
import { ADD_FAVORITE, ADD_TRACK, REMOVE_FAVORITE } from "../action/action";
import { Heart, HeartFill } from "react-bootstrap-icons";

const SingleTrack = ({ singleSong }) => {
  const dispatch = useDispatch();

  const favoriteTracks = useSelector((state) => state.favoriteTracks.content);
  const isFavorite = favoriteTracks.some(
    (tracks) => tracks.id === singleSong.id
  );

  const handleClick = (track) => {
    dispatch({
      type: ADD_TRACK,
      payload: track,
    });
  };
  const handleClickFavorite = () => {
    if (isFavorite) {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: singleSong.id,
      });
    } else {
      dispatch({
        type: ADD_FAVORITE,
        payload: singleSong,
      });
    }
  };

  return (
    <>
      <img
        className="img-fluid"
        src={singleSong.album.cover_medium}
        alt="track"
        onClick={() => handleClick(singleSong)}
      />
      <div>
        {isFavorite ? (
          <HeartFill
            fill="red"
            onClick={handleClickFavorite}
            style={{ cursor: "pointer" }}
          />
        ) : (
          <Heart onClick={handleClickFavorite} style={{ cursor: "pointer" }} />
        )}
      </div>
      <p>
        Track: {singleSong.title}
        <br />
        Artist:{singleSong.artist.name}
      </p>
    </>
  );
};
export default SingleTrack;
