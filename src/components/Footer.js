import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div className="footer_bar">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="footer_bar_content d-flex flex-row align-items-center justify-content-start">
                <div className="copyright">
                  Copyright &copy; All rights reserved ICITA 2020 | Credits :{" "}
                  <i className="fa fa-heart-o" aria-hidden="true"></i>{" "}
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
export default Footer;
