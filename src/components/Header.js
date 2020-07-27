import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faSearchengin } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";

class Header extends React.Component {
  // function  activeClas (route) {
  //     return window.location.pathname === route ? "active" : null;
  //   };
  render() {
    const activeClass = this.props.activeClass;
    return (
      <header className="header">
        <nav className="navbar navbar-dark navbar-expand-md">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="logo">
            <a href="#">
              <span>
                ICITA<span>2021</span>
              </span>
              <span>Conference</span>
            </a>
          </div>

          <div className="collapse navbar-collapse main_nav" id="navbarNav">
            <ul className="navbar-nav">
              <li className={activeClass("/Home")}>
                <Link to="/">Home</Link>
              </li>
              <li className={activeClass("/callforpapers")}>
                <Link to="/callforpapers">Call for Papers</Link>
              </li>
              <li className={activeClass("/previousconferences")}>
                <Link to="/previousconferences">Previous Conferences</Link>
              </li>

              <li className={activeClass("/technicalcommittee")}>
                <Link to="/technicalcommittee">Technical Committee</Link>
              </li>
              <li className={activeClass("/organizers")}>
                <Link to="/organizers">Organisers</Link>
              </li>
              <li className={activeClass("/importantdates")}>
                <Link to="/importantdates">Important Dates</Link>
              </li>

              <li className="has_children">
                <a href="schedule.html">Schedule</a>
                <ul>
                  <li>
                    <a href="#">Program Schedule</a>
                  </li>
                  <li>
                    <Link to="/speakers">Speakers</Link>
                  </li>
                  <li>
                    <a href="#">Venue</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </li>
            </ul>

            <div className="header_right ml-auto d-flex flex-row align-items-center justify-content-start">
              <div className="social">
                <ul className="d-flex flex-row align-items-center justify-content-start">
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
