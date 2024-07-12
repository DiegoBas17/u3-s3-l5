import { Col, Row } from "react-bootstrap";
import CardsTrack from "./CardsTrack";

const Home = () => {
  return (
    <Col sm="12" md="9">
      <main className=" offset-md-3 mainPage">
        <Row>
          <Col sm="9" lg="11" className="mainLinks d-none d-md-flex">
            <a href="#">TRENDING</a>
            <a href="#">PODCAST</a>
            <a href="#">MOODS AND GENRES</a>
            <a href="#">NEW RELEASES</a>
            <a href="#">DISCOVER</a>
          </Col>
        </Row>
        <Row>
          <Col xs="10">
            <div id="rock">
              <h2>Rock Classics</h2>
              <Row
                xs="1"
                sm="2"
                lg="3"
                xl="4"
                className="imgLinks py-3"
                id="rockSection"
              >
                <CardsTrack artistName={"queen"} tipo={"ROCKCLASSIC"} />
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="10">
            <div id="pop">
              <h2>Pop Culture</h2>
              <Row
                xs="1"
                sm="2"
                lg="3"
                xl="4"
                className="imgLinks py-3"
                id="popSection"
              >
                <CardsTrack artistName={"katyperry"} tipo={"POPCULTURE"} />
              </Row>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="10">
            <div id="hiphop">
              <h2>#HipHop</h2>
              <Row
                xs="1"
                sm="2"
                lg="3"
                xl="4"
                className="imgLinks py-3"
                id="hipHopSection"
              >
                <CardsTrack artistName={"eminem"} tipo={"HIPHOP"} />
              </Row>
            </div>
          </Col>
        </Row>
      </main>
    </Col>
  );
};
export default Home;
