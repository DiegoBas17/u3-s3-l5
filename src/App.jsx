import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import { Container, Row } from "react-bootstrap";
import MyNavbar from "./components/MyNavbar";
import Player from "./components/Player";

function App() {
  return (
    <BrowserRouter>
      <Container fluid>
        <Row>
          <MyNavbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Row>
      </Container>
      <Player />
    </BrowserRouter>
  );
}

export default App;
