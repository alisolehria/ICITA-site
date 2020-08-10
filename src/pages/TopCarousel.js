import React from "react";
import carouselPic1 from "../assets/index.jpg";
import carouselPic2 from "../assets/dubai-1.jpg";
//import carouselPic3 from "../assets/blog_page.jpg";
import { Slide } from "react-slideshow-image";

class TopCarousel extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="home_slider_container">
          <div className="owl-carousel owl-theme home_slider">
            <Slide>
              <div className="each-slide">
                <div style={{ backgroundImage: `url(${carouselPic1})` }}></div>
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title">
                            <h1>
                              <span>2021</span>
                              <span>
                                15th International Conference on Information
                                Technology and Applications (ICITA)
                              </span>
                              {/* <span>Conference</span> */}
                            </h1>
                          </div>
                          <div className="home_info_container">
                            <div className="home_info">
                              <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li>13-15 Novemeber 2021</li>
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
                <div className="home_container">
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <div className="home_content">
                          <div className="home_title">
                            <h1>
                              <span>2021</span>
                              {/* <li>Dubai</li> */}
                              <span>Dubai Knowledge Park</span>
                            </h1>
                          </div>
                          <div className="home_info_container">
                            <div className="home_info">
                              <ul className="d-flex flex-row align-items-center justify-content-start">
                                <li>13-15 November 2021</li>
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

export default TopCarousel;
