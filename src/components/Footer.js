import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer_container">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 footer_col">
                <div className="logo">
                  <a href="#">
                    <span>
                      ICITA<span>2021</span>
                    </span>
                    <span>CONFERENCE</span>
                  </a>
                </div>
                <div className="footer_text">
                  <p>To sponsor the event, contact chair@icita.world</p>
                </div>
                <div className="social footer_social">
                  <ul className="d-flex flex-row align-items-center justify-content-start">
                    <li>
                      <a href="#">
                        <i className="fa fa-pinterest" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" aria-hidden="true"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 footer_col">
                <div className="footer_column">
                  <div className="footer_title">Proceedings</div>
                  <div className="footer_text">
                    <p>TBC</p>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 footer_col">
                <div className="footer_column">
                  <div className="footer_title">Sponsors</div>
                  <div className="gallery d-flex flex-row align-items-start justify-content-between flex-wrap">
                    <div className="gallery_item">
                      <a
                        className="colorbox"
                        href="http://www.hw.ac.uk"
                        target="_blank"
                      >
                        <img
                          src={require("../assets/previous/hw.png")}
                          alt=""
                        />
                      </a>
                    </div>
                    {/*
                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_2_large.jpg">
                        <img
                          src={require("../assets/previous/conf2-sm.jpg")}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_3_large.jpg">
                        <img
                          src={require("../assets/previous/conf4-sm.jpg")}
                          alt=""
                        />
                      </a>
                    </div>

                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_4_large.jpg">
                        <img src="images/gallery_5.jpg" alt="" />
                      </a>
                    </div>

                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_5_large.jpg">
                        <img src="images/gallery_5.jpg" alt="" />
                      </a>
                    </div>

                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_6_large.jpg">
                        <img src="images/gallery_6.jpg" alt="" />
                      </a>
                    </div>

                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_7_large.jpg">
                        <img src="images/gallery_7.jpg" alt="" />
                      </a>
                    </div>

                    <div className="gallery_item">
                      <a className="colorbox" href="images/gallery_8_large.jpg">
                        <img src="images/gallery_8.jpg" alt="" />
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_bar">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="footer_bar_content d-flex flex-row align-items-center justify-content-start">
                  <div className="copyright">
                    Copyright ICITA 2002-&copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | Credit{" "}
                    <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
