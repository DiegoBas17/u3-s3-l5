import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { ADD_TRACK } from "../action/action";

const CardsTrack = ({ artistName }) => {
  const [arrayTracks, setArrayTracks] = useState();
  const dispatch = useDispatch();

  const fillMusicSection = async (artistName) => {
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
        setArrayTracks(arrayFourTracks);
      } else {
        throw new Error("Error in fetching songs");
      }
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fillMusicSection(artistName);
  }, []);

  const handleClick = (track) => {
    dispatch({
      type: ADD_TRACK,
      payload: track,
    });
  };

  return (
    <>
      {arrayTracks &&
        arrayTracks.map((singleSong, index) => {
          return (
            <Col className="text-center" key={index}>
              <img
                className="img-fluid"
                src={singleSong.album.cover_medium}
                alt="track"
                onClick={() => handleClick(singleSong)}
              />
              <p>
                Track: {singleSong.title}
                <br />
                Artist:{singleSong.artist.name}
              </p>
            </Col>
          );
        })}
    </>
  );
};
export default CardsTrack;
