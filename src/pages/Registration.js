import React from "react";

class Registration extends React.Component {
  componentDidMount() {
    document.title =
      "Registration - 15th International Conference on Information Technology and Applications (ICITA)";
  }

  render() {
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="col text-center">
                  <div className="section_title_container text-center">
                    <div className="contact_title">
                      <h1> Conference Registration</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <p align="center">
                      <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLScMyVMhxEatdz-PJTBIxb8WPY1MlgyFc4RaZTWndTSciI0Hrw/viewform?embedded=true"
                        width="740"
                        height="1446"
                        frameBorder="0"
                        marginHeight="0"
                        marginWidth="0"
                      >
                        Loading…
                      </iframe>
                    </p>
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

export default Registration;
