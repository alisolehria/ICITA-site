import React from "react";
import carouselPic1 from "../assets/index.jpg";
import carouselPic2 from "../assets/dubai-1.jpg";
//import carouselPic3 from "../assets/blog_page.jpg";
import { Slide } from "react-slideshow-image";

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
                              <span>15th ICITA</span>
                              <span>Conference</span>
                            </h1>
                          </div>
                          <div class="home_info_container">
                            <div class="home_info">
                              <ul class="d-flex flex-row align-items-center justify-content-start">
                                <li>13-14 Novemeber 2021</li>
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

export default TopCarousel;
