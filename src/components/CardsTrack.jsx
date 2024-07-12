import { useEffect } from "react";
import { Col } from "react-bootstrap";
import SingleTrack from "./SingleTrack";
import { useDispatch, useSelector } from "react-redux";
import { fetchTracksAction } from "../action/action";

const CardsTrack = (props) => {
  const { artistName, tipo } = props;
  const dispatch = useDispatch();
  const objState = useSelector((state) => state.fetchTracks);

  let arrayTracks = [];
  switch (tipo) {
    case "ROCKCLASSIC":
      arrayTracks = objState.rockClassic.content;
      break;
    case "POPCULTURE":
      arrayTracks = objState.popCulture.content;
      break;
    case "HIPHOP":
      arrayTracks = objState.hipHop.content;
      break;

    default:
      break;
  }

  useEffect(() => {
    dispatch(fetchTracksAction(artistName, tipo));
  }, [artistName, tipo, dispatch]);
  console.log("arrayTracks", arrayTracks);
  return (
    <>
      {arrayTracks &&
        arrayTracks.map((singleSong, index) => (
          <Col className="text-center" key={index}>
            <SingleTrack singleSong={singleSong} />
          </Col>
        ))}
    </>
  );
};

export default CardsTrack;
