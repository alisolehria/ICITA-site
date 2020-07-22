import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <div class="footer_bar">
        <div class="container">
          <div class="row">
            <div class="col">
              <div class="footer_bar_content d-flex flex-row align-items-center justify-content-start">
                <div class="copyright">
                  Copyright &copy; All rights reserved ICITA 2020 | Credits :{" "}
                  <i class="fa fa-heart-o" aria-hidden="true"></i>{" "}
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
