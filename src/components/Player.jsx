import { useDispatch, useSelector } from "react-redux";
import next from "../playerbuttons/next.png";
import play from "../playerbuttons/play.png";
import prev from "../playerbuttons/prev.png";
import repeat from "../playerbuttons/repeat.png";
import shuffle from "../playerbuttons/shuffle.png";
import { Col, Container, Row } from "react-bootstrap";
import { Heart, HeartFill } from "react-bootstrap-icons";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../action/action";

const Player = () => {
  const dispatch = useDispatch();
  const track = useSelector((state) => state.trackSelected.content);
  const favoriteTracks = useSelector((state) => state.favoriteTracks.content);
  const isFavorite = favoriteTracks.some((tracks) => tracks.id === track?.id);

  const handleClickFavorite = () => {
    if (isFavorite) {
      dispatch({
        type: REMOVE_FAVORITE,
        payload: track.id,
      });
    } else {
      dispatch({
        type: ADD_FAVORITE,
        payload: track,
      });
    }
  };

  return (
    <Container fluid className="fixed-bottom bg-container pt-1">
      <Row className="h-100">
        <Col lg="10" className="offset-lg-2">
          <Row className="h-100  justify-content-center align-items-center">
            {track && (
              <>
                <Col xs="3" md="4" className="text-white">
                  <p>{track.title}</p>
                  <p>{track.artist.name}</p>
                </Col>
              </>
            )}
            <Col xs="6" md="4" className="playerControls">
              <div className="d-flex">
                <a href="#">
                  <img src={shuffle} alt="shuffle" />
                </a>
                <a href="#">
                  <img src={prev} alt="prev" />
                </a>
                <a href="#">
                  <img src={play} alt="play" />
                </a>
                <a href="#">
                  <img src={next} alt="next" />
                </a>
                <a href="#">
                  <img src={repeat} alt="repeat" />
                </a>
              </div>
              <div className="progress mt-3">
                <div role="progressbar"></div>
              </div>
            </Col>
            <Col xs="3" md="4">
              {isFavorite ? (
                <HeartFill
                  fill="red"
                  onClick={handleClickFavorite}
                  style={{ cursor: "pointer" }}
                />
              ) : (
                <Heart
                  fill="red"
                  onClick={handleClickFavorite}
                  style={{ cursor: "pointer" }}
                />
              )}
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};
export default Player;
