import { Col } from "react-bootstrap";
import logo from "../logo/logo.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import InputSearch from "./InputSearch";

const MyNavbar = () => {
  return (
    <Col md="2">
      <nav
        className="navbar navbar-expand-md fixed-left justify-content-between"
        id="sidebar"
      >
        <div className="container flex-column align-items-start">
          <a className="navbar-brand" href="index.html">
            <img src={logo} alt="Spotify Logo" width="131" height="40" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <ul>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <HouseDoorFill className="me-2" /> Home
                  </a>
                </li>
                <li>
                  <a
                    className="nav-item nav-link d-flex align-items-center"
                    href="#"
                  >
                    <BookFill className="me-2" /> Your Library
                  </a>
                </li>
                <li>
                  <InputSearch />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav-btn d-block d-flex flex-column align-items-center justify-content-center">
          <button className="btn signup-btn d-block ms-4 mb-3" type="button">
            Sign Up
          </button>
          <button className="btn login-btn d-block ms-4 mb-3" type="button">
            Login
          </button>
          <a href="#">Cookie Policy</a>
          <a href="#"> Privacy</a>
        </div>
      </nav>
    </Col>
  );
};
export default MyNavbar;
