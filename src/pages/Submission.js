import React from "react";

class Submission extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    document.title = "ICITA 2021 | Submissions";
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <div className="intro">
          <div className="container">
            <div className="row">
              <div className="col-lg-9">
                <div className="col text-center">
                  <div className="section_title_container text-center">
                    <div className="section_title">
                      <h1>Submission System</h1>
                    </div>
                  </div>
                  <div className="intro_left_content text_left">
                    <div className="row speakers_row">
                      <p align="left">
                        Prospective authors are encouraged to submit papers for
                        evaluation by the Program Committee.
                      </p>
                      <p align="left">
                        All papers must follow the formatting rules for
                        Proceedings in Advances in Intelligent Systems and
                        Computing Series (see{" "}
                        <a
                          href="https://www.springer.com/de/authors-editors/book-authors-editors/resources-guidelines/book-manuscript-guidelines/manuscript-preparation/5636"
                          target="_blank"
                        >
                          Instructions for Authors at Springer Website) and be
                          written in English.
                        </a>
                      </p>
                      <p align="left">
                        The version of papers for evaluation by the Program
                        Committee, saved in PDF format, must not include
                        identification, e-mail and affiliation of the authors.
                        This information must only be available in the
                        camera-ready version of accepted papers, saved in Word
                        or Latex format and also in PDF format. These files must
                        be accompanied by the Consent to Publish form filled
                        out, in a ZIP file, and uploaded at the conference
                        management system.
                      </p>
                      <p align="left">
                        To submit or upload a paper please go to Easychair
                        conference Management System:
                      </p>
                      <div class="button button_3 cta_button">
                        <a href="#">
                          <span>
                            Easychair
                            <img src={require("../assets/arrow.png")} alt="" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 sidebar_col">
                <div className="sidebar">
                  <br></br>
                  <p>
                    {" "}
                    <img
                      src={require("../assets/springerlink.jpg")}
                      width="230"
                      height="auto"
                    />{" "}
                  </p>
                  <div className="categories sidebar_list">
                    <div className="sidebar_title">Proceedings</div>
                    <ul>
                      <li>
                        <a
                          href="https://www.springer.com/series/15179"
                          target="_blank"
                        >
                          Lecture Notes in Network Systems Series
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="categories sidebar_list">
                    <img
                      src={require("../assets/scopus.png")}
                      width="230"
                      height="auto"
                    />
                  </div>
                  <br></br>
                  <div className="categories sidebar_list">
                    <img
                      src={require("../assets/isi.jpg")}
                      width="230"
                      height="auto"
                    />
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

export default Submission;
