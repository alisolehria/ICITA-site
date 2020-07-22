import React from "react";
import logo from "./assets/logo-small.png";
import carouselPic1 from "./assets/index.jpg";
import carouselPic2 from "./assets/dubai-1.jpg";
import carouselPic3 from "./assets/blog_page.jpg";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import DateCountdown from "react-date-countdown-timer";
import Carousel from "react-bootstrap/Carousel";
import Home from "./pages/Home";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Slide } from "react-slideshow-image";

window.$strapiLink = "http://localhost:1337/organizers";

// class Home extends React.Component {
//   componentDidMount() {
//   document.title = 'ICITA';
// }
//    render(){
//       return (
//          <div>

//             <TopCarousel/>
//             <Timer/>
//             <Introduction/>
//             <Footer/>
//          </div>
//       );
//    }
// }

{
  /*class Navbar extends React.Component {
   render(){
    return (
<header class="header">
    <div class="navbar-dark header_content d-flex flex-row align-items-center justify-content-start">

      <div class="logo">
                 
                    <a href="#" class="navbar-brand"> <img id="logo" alt="Logo" src={logo}/></a>
      </div>

  
      <nav class="main_nav">

        <ul class="d-flex flex-row align-items-center justify-content-start">
          <li class="active"><a href="">Home</a></li>
          <li><a href="">Call for Papers</a></li>
          <li><a href="">Previous Conferences</a></li>
          <li><a href="">Technical Committee</a></li>
          <li><a href="">Organizers</a></li>
          <li><a href="">Previous Listings</a></li>
        </ul>
      </nav>

      <div class="header_right ml-auto d-flex flex-row align-items-center justify-content-start">
     
        <div class="social">
          <ul class="d-flex flex-row align-items-center justify-content-start">
     
            <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faFacebook} /></a></li>

          </ul>

        </div>
        
 
     
      </div>
    </div>
  </header>

   )
 }
}
*/
}

class RouterNav extends React.Component {
  render() {
    const activeClass = (route) => {
      return window.location.pathname === route ? "active" : null;
    };

    return (
      <Router>
        <header class="header">
          <nav class="navbar navbar-dark navbar-expand-md">
            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            {/* <div class="logo navbar-header">
                 
                    <a href="#" class="navbar-brand"> <img id="logo" alt="Logo" src={logo}/></a>
      </div> */}

            <div class="logo">
              <a href="#">
                <span>
                  ICITA<span>2021</span>
                </span>
                <span>Conference</span>
              </a>
            </div>

            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li className={activeClass("/~am29/react-b")}>
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
                  <Link to="/organizers">Organizers</Link>
                </li>
                <li className={activeClass("/previouslistings")}>
                  <Link to="/previouslistings">Previous Listings</Link>
                </li>
              </ul>

              <div class="header_right ml-auto d-flex flex-row align-items-center justify-content-start">
                <div class="social">
                  <ul class="d-flex flex-row align-items-center justify-content-start">
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
        <Switch>
          <Route exact path="/Home">
            <Home />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/callforpapers">
            <CallForPapers />
          </Route>
          <Route path="/previousconferences">
            <PreviousConferences />
          </Route>
          <Route path="/technicalcommittee">
            <TechnicalCommittee />
          </Route>
          <Route path="/organizers">
            <Organizers />
          </Route>
          <Route path="/previouslistings">
            <PreviousListings />
          </Route>
        </Switch>
      </Router>
    );
  }
}

class TopCarousel extends React.Component {
  render() {
    return (
      <div class="home">
        <div class="home_slider_container">
          <div class="owl-carousel owl-theme home_slider">
            <Slide>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${carouselPic1})` }}></div>
                <div class="home_container">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="home_content">
                          <div class="home_title">
                            <h1>
                              <span>2021</span>
                              <span>Computer Science</span>
                              <span>Conference</span>
                            </h1>
                          </div>
                          <div class="home_info_container">
                            <div class="home_info">
                              <ul class="d-flex flex-row align-items-center justify-content-start">
                                <li>12-16 February 2021</li>
                                <li>Dubai, UAE</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${carouselPic2})` }}></div>
                <div class="home_container">
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="home_content">
                          <div class="home_title">
                            <h1>
                              <span>2021</span>
                              <span>Computer Science</span>
                              <span>Conference</span>
                            </h1>
                          </div>
                          <div class="home_info_container">
                            <div class="home_info">
                              <ul class="d-flex flex-row align-items-center justify-content-start">
                                <li>12-16 February 2021</li>
                                <li>Dubai, UAE</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </div>
    );
  }
}

class Introduction extends React.Component {
  render() {
    return (
      <div class="intro">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              <div class="section_title_container text-center">
                <div class="section_title">
                  <h1>The Conference</h1>
                </div>
              </div>
              <div class="intro_text text-center">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida. Risus commodo viverra
                  maecenas accumsan lacus vel facilisis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class PageCarousel extends React.Component {
  render() {
    return (
      <div>
        <img class="pageCarousel" src={carouselPic3} />
        <div class="home_container">
          <div class="container">
            <div class="row">
              <div class="col">
                <div class="home_content">
                  <div class="home_title">
                    <h1>
                      <span style={{ color: "white" }}>{this.props.title}</span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CallForPapers extends React.Component {
  componentDidMount() {
    document.title = "Call For Papers";
  }
  render() {
    return (
      <div>
        <PageCarousel title="Call For Papers" />
        <Introduction />
        <Footer />
      </div>
    );
  }
}

class PreviousConferences extends React.Component {
  componentDidMount() {
    document.title = "Previous Conferences";
  }
  render() {
    return (
      <div>
        <PageCarousel title="Previous Conferences" />
        <Introduction />
        <Footer />
      </div>
    );
  }
}

class TechnicalCommittee extends React.Component {
  componentDidMount() {
    document.title = "Technical Committee";
  }
  render() {
    return (
      <div>
        <PageCarousel title="Technical Committee" />
        <Introduction />
        <Footer />
      </div>
    );
  }
}

class Organizers extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "Organizers";
    fetch(window.$strapiLink)
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <PageCarousel title="Organizers" />
        <Introduction />
        {data.map((hit) => (
          <h2> {hit.Name}</h2>
        ))}
        <Footer />
      </div>
    );
  }
}

class PreviousListings extends React.Component {
  componentDidMount() {
    document.title = "Previous Listings";
  }
  render() {
    return (
      <div>
        <PageCarousel title="Previous Listings" />
        <Introduction />
        <Footer />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <div class="footer_bar">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer_bar_content d-flex flex-row align-items-center justify-content-start">
                <div class="copyright">
                  Copyright &copy; All rights reserved | This template is made
                  with <i class="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                  <a href="https://colorlib.com" target="_blank">
                    Colorlib
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default RouterNav;
