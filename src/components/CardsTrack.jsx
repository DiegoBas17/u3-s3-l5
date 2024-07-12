import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import SingleTrack from "./SingleTrack";

const CardsTrack = ({ artistName }) => {
  const [arrayTracks, setArrayTracks] = useState();

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

  return (
    <>
      {arrayTracks &&
        arrayTracks.map((singleSong, index) => {
          return (
            <Col className="text-center" key={index}>
              <SingleTrack singleSong={singleSong} />
            </Col>
          );
        })}
    </>
  );
};
export default CardsTrack;
